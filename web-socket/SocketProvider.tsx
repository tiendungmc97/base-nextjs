import { isEmpty } from "lodash";
import { createContext, useEffect, useRef, useState } from "react";
import {
  decodeGrpcPayload,
  getKeyFromValue,
  logWebsocketError,
  logWebSocketRpcReceiveMessage,
  logWebsocketRpcSendMessage,
  logWebsocketSuccess,
} from "../src/utils/webSocket";
import {
  ParamsSendRpcMessage,
  ResponseWebsocket,
  WebsocketContextType,
  WebsocketProviderProps,
} from "./interface";
import { getParamsFromUrl } from "@/utils/common";
import { RpcMessage } from "@/proto/rpc_pb";
import { debugLogFlag, NUMBER_RECONNECT, SOCKET_RECONNECT_TIMEOUT } from "@/config/webSocket";

const urlWs = process.env.NEXT_PUBLIC_WEBSOCKET_URL || "";

const initResponse = {
  payloadClass: null,
  response: null,
};

export const WebsocketContext = createContext<WebsocketContextType>({
  isReady: false,
  data: initResponse,
  sendRpcMessage: undefined,
});

let timerPing: any = null;
let timerSocket: any = null;

export const WebsocketProvider: React.FC<WebsocketProviderProps> = ({ children }) => {
  const ws = useRef<WebSocket | null>(null);
  const paramsUrl = getParamsFromUrl(window.location.search);
  const numberReconnect = useRef<number>(0);

  const [isReady, setIsReady] = useState<boolean>(false);
  const [data, setData] = useState<ResponseWebsocket>(initResponse);

  useEffect(() => {
    const url = urlWs;
    const socket = new WebSocket(url);

    socket.binaryType = "arraybuffer";
    socket.onopen = () => onOpen(socket);
    socket.onerror = (error) => onError(error);
    socket.onclose = () => onClose();

    socket.onmessage = (event) => {
      const rpc = RpcMessage.deserializeBinary(event.data);
      const payloadClass = rpc.getPayloadClass();
      const response: Uint8Array = rpc.getPayloadData() as Uint8Array;
      const decodeResponse = decodeGrpcPayload(payloadClass, response);
      logWebSocketRpcReceiveMessage(payloadClass, response)
      setData({ payloadClass, response: decodeResponse });
    };

    ws.current = socket;
    return () => {
      socket.close();
    };
  }, [paramsUrl?.accountId, paramsUrl?.token]);

  const onOpen = (socket: WebSocket) => {
    logWebsocketSuccess({ massages: ["WebSocket connection established."] });
    setIsReady(true);
    clearInterval(timerSocket);
    timerPing = setInterval(() => {
      socket.send("ping");
    }, 30000);
  };

  const onError = (error: any) => {
    logWebsocketError({ massages: ["WebSocket error occurred:", error] });
  };

  const onClose = () => {
    logWebsocketError({ massages: ["WebSocket connection closed."] });
    setIsReady(false);
    clearInterval(timerPing);
    timerSocket = setInterval(() => {
      if (numberReconnect.current <= NUMBER_RECONNECT && !isEmpty(paramsUrl?.token)) {
        numberReconnect.current = numberReconnect.current + 1;
        const url = urlWs;
        new WebSocket(url);
      } else clearInterval(timerSocket);
    }, SOCKET_RECONNECT_TIMEOUT);
  };

  const sendRpcMessage = ({
    rpcService,
    payloadClass,
    payloadData,
  }: ParamsSendRpcMessage): void => {
    try {
      let currentDate = new Date();
      let rpcMessage: RpcMessage = new RpcMessage();
      rpcMessage.setVersion("1");
      rpcMessage.setId(new Date().getTime());
      rpcMessage.setService(rpcService);
      rpcMessage.setPayloadClass(payloadClass);
      rpcMessage.setContextId(currentDate.getTime());
      rpcMessage.setPayloadData(payloadData);
      ws.current?.send(rpcMessage.serializeBinary());
      if (debugLogFlag) {
        if (typeof payloadData === "string" || !payloadClass) return;
        logWebsocketRpcSendMessage(payloadClass, payloadData);
      }
    } catch (e) {
      const namePayloadClass = getKeyFromValue(payloadClass);
      logWebsocketError({ status: "send", massages: [namePayloadClass] });
    }
  };

  const ret: WebsocketContextType = { isReady, data, sendRpcMessage };

  return <WebsocketContext.Provider value={ret}>{children}</WebsocketContext.Provider>;
};
