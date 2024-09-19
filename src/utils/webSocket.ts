
import { debugLogFlag } from "@/config/webSocket";
import { RPC_MAPPING } from "@/constant/webSocket";
import { RpcMessage } from "@/proto/rpc_pb";
import { PayLoadClass } from "../../web-socket/interface";

export const decodeGrpcPayload = (
  payloadClass: PayLoadClass,
  payloadData: Uint8Array,
): any => {
  try {
    const rpcClass = RPC_MAPPING[payloadClass];
    if (!rpcClass) {
      logWebsocketError({
        massages: [
          "Not found RpcClass",
          "Please check if RpcClass exists in the RPC_MAPPING within the constants file",
        ],
      });
    }
    const deserializedObject = rpcClass.deserializeBinary(payloadData);
    return deserializedObject.toObject();
  } catch (error) {
    const namePayloadClass = getKeyFromValue(payloadClass);
    logWebsocketError({ status: "send", massages: [namePayloadClass] });
    return null;
  }
};

export function getKeyFromValue(payloadClass: PayLoadClass): string | undefined {
  for (const key in RpcMessage.Payload) {
    if (Object.prototype.hasOwnProperty.call(RpcMessage.Payload, key)) {
      if (RpcMessage.Payload[key as keyof typeof RpcMessage.Payload] === payloadClass) {
        return key;
      }
    }
  }
  return undefined;
}


export const logWebSocketRpcReceiveMessage = (
  payloadClass: PayLoadClass,
  payloadData: Uint8Array,
) => {
  if (payloadData instanceof Uint8Array) {
    const rpcClass = RPC_MAPPING[payloadClass];
    if (!rpcClass) {
      logWebsocketError({
        massages: [
          "Not found RpcClass",
          "Please check if RpcClass exists in the RPC_MAPPING within the constants file",
        ],
      });
    }
    const decodedData = decodeGrpcPayload(payloadClass, payloadData);
    const namePayloadClass = getKeyFromValue(payloadClass);
    logWebsocketSuccess({ status: "receive", massages: [namePayloadClass, decodedData] });
  } else {
    logWebsocketSuccess({ status: "receive", massages: [payloadData] });
  }
};

export const logWebsocketRpcSendMessage = (
  payloadClass: RpcMessage.PayloadMap[keyof RpcMessage.PayloadMap],
  payloadData: Uint8Array | string,
) => {
  if (payloadData instanceof Uint8Array) {
    const rpcClass = RPC_MAPPING[payloadClass];
    if (!rpcClass) {
      logWebsocketError({
        massages: [
          "Not found RpcClass",
          "Please check if RpcClass exists in the RPC_MAPPING within the constants file",
        ],
      });
    }
    const decodedData = decodeGrpcPayload(payloadClass, payloadData);
    const namePayloadClass = getKeyFromValue(payloadClass);
    logWebsocketSuccess({ status: "send", massages: [namePayloadClass, decodedData] });
  } else {
    logWebsocketSuccess({ status: "send", massages: [payloadData] });
  }
};

export function logWebsocketSuccess({
  status,
  massages,
}: {
  status?: "send" | "receive";
  massages: any[];
}): void {
  if (debugLogFlag) {
    console.info(
      `%cSocket`,
      "color:white;font-weight:bold;background:#0194ff;padding:2px 6px",
      status ? status : "",
      ...massages,
    );
  }
}

export function logWebsocketError({
  status,
  massages,
}: {
  status?: "send" | "receive";
  massages: any[];
}): void {
  if (debugLogFlag) {
    console.error(
      `%cSocket`,
      "color:white;font-weight:bold;background:#0194ff;padding:2px 6px",
      status ? status : "",
      ...massages,
    );
  }
}
