// package: 
// file: trading_service.proto

import * as jspb from "google-protobuf";
import * as trading_model_pb from "./trading_model_pb";
import * as system_model_pb from "./system_model_pb";

export class NewOrderSingleRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getRandomNumber(): string;
  setRandomNumber(value: string): void;

  getHashPassword(): string;
  setHashPassword(value: string): void;

  getHashPasswordOnly8(): string;
  setHashPasswordOnly8(value: string): void;

  getHiddenConfirmFlg(): boolean;
  setHiddenConfirmFlg(value: boolean): void;

  getPsplAccountNo(): string;
  setPsplAccountNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewOrderSingleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewOrderSingleRequest): NewOrderSingleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewOrderSingleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewOrderSingleRequest;
  static deserializeBinaryFromReader(message: NewOrderSingleRequest, reader: jspb.BinaryReader): NewOrderSingleRequest;
}

export namespace NewOrderSingleRequest {
  export type AsObject = {
    order?: trading_model_pb.Order.AsObject,
    secretKey: string,
    sessionId: string,
    randomNumber: string,
    hashPassword: string,
    hashPasswordOnly8: string,
    hiddenConfirmFlg: boolean,
    psplAccountNo: string,
  }
}

export class NewOrderSingleResponse extends jspb.Message {
  getMsgCode(): system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap];
  setMsgCode(value: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewOrderSingleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewOrderSingleResponse): NewOrderSingleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewOrderSingleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewOrderSingleResponse;
  static deserializeBinaryFromReader(message: NewOrderSingleResponse, reader: jspb.BinaryReader): NewOrderSingleResponse;
}

export namespace NewOrderSingleResponse {
  export type AsObject = {
    msgCode: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap],
    msgText: string,
    order?: trading_model_pb.Order.AsObject,
  }
}

export class OrderEvent extends jspb.Message {
  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OrderEvent): OrderEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderEvent;
  static deserializeBinaryFromReader(message: OrderEvent, reader: jspb.BinaryReader): OrderEvent;
}

export namespace OrderEvent {
  export type AsObject = {
    orderList: Array<trading_model_pb.Order.AsObject>,
  }
}

export class CancelOrderRequest extends jspb.Message {
  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getRandomNumber(): string;
  setRandomNumber(value: string): void;

  getHashPassword(): string;
  setHashPassword(value: string): void;

  getHashPasswordOnly8(): string;
  setHashPasswordOnly8(value: string): void;

  getHiddenConfirmFlg(): boolean;
  setHiddenConfirmFlg(value: boolean): void;

  getTeamCode(): string;
  setTeamCode(value: string): void;

  getTeamPassword(): string;
  setTeamPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderRequest): CancelOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderRequest;
  static deserializeBinaryFromReader(message: CancelOrderRequest, reader: jspb.BinaryReader): CancelOrderRequest;
}

export namespace CancelOrderRequest {
  export type AsObject = {
    orderList: Array<trading_model_pb.Order.AsObject>,
    secretKey: string,
    sessionId: string,
    randomNumber: string,
    hashPassword: string,
    hashPasswordOnly8: string,
    hiddenConfirmFlg: boolean,
    teamCode: string,
    teamPassword: string,
  }
}

export class CancelOrderResponse extends jspb.Message {
  getMsgCode(): system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap];
  setMsgCode(value: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderResponse): CancelOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderResponse;
  static deserializeBinaryFromReader(message: CancelOrderResponse, reader: jspb.BinaryReader): CancelOrderResponse;
}

export namespace CancelOrderResponse {
  export type AsObject = {
    msgCode: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap],
    msgText: string,
    orderList: Array<trading_model_pb.Order.AsObject>,
  }
}

