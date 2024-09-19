import { RpcMessage } from "@/proto/rpc_pb";
import { ReactNode } from "react";
export enum RpcService {
  PRICING = "pricing",
  SYSTEM = "system",
  TRADING = "trading",
  QUERY = "query",
}
export enum WebsocketState {
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
}
export type PayLoadClass = RpcMessage.PayloadMap[keyof RpcMessage.PayloadMap];
export interface WebsocketProviderProps {
  children: ReactNode;
}
export interface ParamsSendRpcMessage {
  rpcService: RpcService;
  payloadClass: PayLoadClass;
  payloadData: any;
}
export interface ResponseWebsocket {
  payloadClass: PayLoadClass | null;
  response: any;
}
export interface WebsocketContextType {
  isReady: boolean;
  data: ResponseWebsocket;
  sendRpcMessage:
    | (({ rpcService, payloadClass, payloadData }: ParamsSendRpcMessage) => void)
    | undefined;
}
