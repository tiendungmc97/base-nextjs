
import { RpcMessage } from "@/proto/rpc_pb";
import { LoginRequest, LoginResponse } from "@/proto/system_service_pb";
import { PayLoadClass } from "../../web-socket/interface";

//need to mapping RPC Class for logging send, receive data object;
export type IRpcMapping = {
    [k in PayLoadClass]?: any
}
export const RPC_MAPPING: IRpcMapping = {
    [RpcMessage.Payload.AUTHEN_REQ]: LoginRequest,
    [RpcMessage.Payload.AUTHEN_RES]: LoginResponse,
}
