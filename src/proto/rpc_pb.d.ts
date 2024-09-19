// package: 
// file: rpc.proto

import * as jspb from "google-protobuf";

export class RpcMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getResult(): RpcMessage.ResultMap[keyof RpcMessage.ResultMap];
  setResult(value: RpcMessage.ResultMap[keyof RpcMessage.ResultMap]): void;

  getVersion(): string;
  setVersion(value: string): void;

  getService(): string;
  setService(value: string): void;

  getSource(): RpcMessage.SourceMap[keyof RpcMessage.SourceMap];
  setSource(value: RpcMessage.SourceMap[keyof RpcMessage.SourceMap]): void;

  getContextId(): number;
  setContextId(value: number): void;

  getPayloadData(): Uint8Array | string;
  getPayloadData_asU8(): Uint8Array;
  getPayloadData_asB64(): string;
  setPayloadData(value: Uint8Array | string): void;

  getPayloadClass(): RpcMessage.PayloadMap[keyof RpcMessage.PayloadMap];
  setPayloadClass(value: RpcMessage.PayloadMap[keyof RpcMessage.PayloadMap]): void;

  getCompress(): boolean;
  setCompress(value: boolean): void;

  getPaging(): number;
  setPaging(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RpcMessage): RpcMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcMessage;
  static deserializeBinaryFromReader(message: RpcMessage, reader: jspb.BinaryReader): RpcMessage;
}

export namespace RpcMessage {
  export type AsObject = {
    id: number,
    result: RpcMessage.ResultMap[keyof RpcMessage.ResultMap],
    version: string,
    service: string,
    source: RpcMessage.SourceMap[keyof RpcMessage.SourceMap],
    contextId: number,
    payloadData: Uint8Array | string,
    payloadClass: RpcMessage.PayloadMap[keyof RpcMessage.PayloadMap],
    compress: boolean,
    paging: number,
    limit: number,
  }

  export interface ResultMap {
    RESULT_NONE: 0;
    INVALID_VERSION: 2;
    INVALID_SERVICE: 3;
    INVALID_PAYLOAD: 4;
    NOT_AUTHENTICATED: 5;
    SERVICE_TIMEOUT: 6;
    SERVICE_REJECTED: 7;
    SERVICE_UNAVAILABLE: 8;
    REQUIRE_VPN: 9;
    MAINTAINANCE: 10;
    INTERNAL_ERROR: 99;
    SUCCESS: 100;
  }

  export const Result: ResultMap;

  export interface SourceMap {
    SOURCE_NONE: 0;
    IOS: 1;
    ANDROID: 2;
    EXTERNAL: 9;
    WEB: 10;
  }

  export const Source: SourceMap;

  export interface PayloadMap {
    PAYLOAD_NONE: 0;
    AUTHEN_REQ: 1;
    HEARTBEAT_REQ: 2;
    AUTHEN_RES: 3;
    HEARTBEAT_RES: 4;
    CHECK_SESSION_RES: 5;
    LAST_QUOTE_REQ: 6;
    SUBSCRIBE_QUOTE_REQ: 7;
    UNSUBSCRIBE_QUOTE_REQ: 9;
    SUBSCRIBE_ORDER_REQ: 10;
    UNSUBSCRIBE_ORDER_REQ: 11;
    QUOTE_EVENT: 12;
    LAST_QUOTE_RES: 13;
    SUBSCRIBE_QUOTE_RES: 14;
    UNSUBSCRIBE_QUOTE_RES: 15;
    SUBSCRIBE_ORDER_RES: 16;
    UNSUBSCRIBE_ORDER_RES: 17;
    NEW_ORDER_SINGLE_REQ: 18;
    CANCEL_ORDER_REQ: 19;
    ORDER_EVENT: 20;
    NEW_ORDER_SINGLE_RES: 21;
    CANCEL_ORDER_RES: 22;
    UPDATE_ORDER_STATUS_REQ: 23;
    UPDATE_ORDER_STATUS_RES: 24;
    POSITION_REQ: 25;
    SYMBOL_LIST_REQ: 26;
    SYMBOL_UPDATE_REQ: 27;
    ORDER_STATUS_REQ: 28;
    POSITION_RES: 29;
    SYMBOL_LIST_RES: 30;
    SYMBOL_UPDATE_RES: 31;
    ORDER_STATUS_RES: 32;
    POSITION_EVENT: 33;
    UPDATE_LAST_PRICE: 34;
    UPDATE_STATUS_REQ: 35;
    UPDATE_STATUS_RES: 36;
    UPDATE_STATUS_EVENT: 37;
  }

  export const Payload: PayloadMap;
}

