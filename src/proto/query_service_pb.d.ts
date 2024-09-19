// package: 
// file: query_service.proto

import * as jspb from "google-protobuf";
import * as system_model_pb from "./system_model_pb";
import * as query_model_pb from "./query_model_pb";

export class GetPositionListRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionListRequest): GetPositionListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionListRequest;
  static deserializeBinaryFromReader(message: GetPositionListRequest, reader: jspb.BinaryReader): GetPositionListRequest;
}

export namespace GetPositionListRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class GetPositionListResponse extends jspb.Message {
  clearPositionList(): void;
  getPositionList(): Array<query_model_pb.Position>;
  setPositionList(value: Array<query_model_pb.Position>): void;
  addPosition(value?: query_model_pb.Position, index?: number): query_model_pb.Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionListResponse): GetPositionListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionListResponse;
  static deserializeBinaryFromReader(message: GetPositionListResponse, reader: jspb.BinaryReader): GetPositionListResponse;
}

export namespace GetPositionListResponse {
  export type AsObject = {
    positionList: Array<query_model_pb.Position.AsObject>,
  }
}

export class PositionEvent extends jspb.Message {
  clearPositionList(): void;
  getPositionList(): Array<query_model_pb.Position>;
  setPositionList(value: Array<query_model_pb.Position>): void;
  addPosition(value?: query_model_pb.Position, index?: number): query_model_pb.Position;

  getAction(): query_model_pb.ActionMap[keyof query_model_pb.ActionMap];
  setAction(value: query_model_pb.ActionMap[keyof query_model_pb.ActionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: PositionEvent): PositionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionEvent;
  static deserializeBinaryFromReader(message: PositionEvent, reader: jspb.BinaryReader): PositionEvent;
}

export namespace PositionEvent {
  export type AsObject = {
    positionList: Array<query_model_pb.Position.AsObject>,
    action: query_model_pb.ActionMap[keyof query_model_pb.ActionMap],
  }
}

export class SymbolListRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolListRequest): SymbolListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolListRequest;
  static deserializeBinaryFromReader(message: SymbolListRequest, reader: jspb.BinaryReader): SymbolListRequest;
}

export namespace SymbolListRequest {
  export type AsObject = {
    accountId: number,
  }
}

export class SymbolListResponse extends jspb.Message {
  getMsgCode(): system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap];
  setMsgCode(value: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearSymbolList(): void;
  getSymbolList(): Array<query_model_pb.Symbol>;
  setSymbolList(value: Array<query_model_pb.Symbol>): void;
  addSymbol(value?: query_model_pb.Symbol, index?: number): query_model_pb.Symbol;

  getAccountId(): number;
  setAccountId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolListResponse): SymbolListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolListResponse;
  static deserializeBinaryFromReader(message: SymbolListResponse, reader: jspb.BinaryReader): SymbolListResponse;
}

export namespace SymbolListResponse {
  export type AsObject = {
    msgCode: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap],
    msgText: string,
    symbolList: Array<query_model_pb.Symbol.AsObject>,
    accountId: number,
  }
}

export class SymbolUpdateRequest extends jspb.Message {
  clearSymbolSettingList(): void;
  getSymbolSettingList(): Array<query_model_pb.SymbolSetting>;
  setSymbolSettingList(value: Array<query_model_pb.SymbolSetting>): void;
  addSymbolSetting(value?: query_model_pb.SymbolSetting, index?: number): query_model_pb.SymbolSetting;

  getAction(): query_model_pb.ActionMap[keyof query_model_pb.ActionMap];
  setAction(value: query_model_pb.ActionMap[keyof query_model_pb.ActionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolUpdateRequest): SymbolUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolUpdateRequest;
  static deserializeBinaryFromReader(message: SymbolUpdateRequest, reader: jspb.BinaryReader): SymbolUpdateRequest;
}

export namespace SymbolUpdateRequest {
  export type AsObject = {
    symbolSettingList: Array<query_model_pb.SymbolSetting.AsObject>,
    action: query_model_pb.ActionMap[keyof query_model_pb.ActionMap],
  }
}

export class SymbolUpdateResponse extends jspb.Message {
  getMsgCode(): system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap];
  setMsgCode(value: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearSymbolSettingList(): void;
  getSymbolSettingList(): Array<query_model_pb.SymbolSetting>;
  setSymbolSettingList(value: Array<query_model_pb.SymbolSetting>): void;
  addSymbolSetting(value?: query_model_pb.SymbolSetting, index?: number): query_model_pb.SymbolSetting;

  getAction(): query_model_pb.ActionMap[keyof query_model_pb.ActionMap];
  setAction(value: query_model_pb.ActionMap[keyof query_model_pb.ActionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolUpdateResponse): SymbolUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolUpdateResponse;
  static deserializeBinaryFromReader(message: SymbolUpdateResponse, reader: jspb.BinaryReader): SymbolUpdateResponse;
}

export namespace SymbolUpdateResponse {
  export type AsObject = {
    msgCode: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap],
    msgText: string,
    symbolSettingList: Array<query_model_pb.SymbolSetting.AsObject>,
    action: query_model_pb.ActionMap[keyof query_model_pb.ActionMap],
  }
}

export class UpdateAllStatusRequest extends jspb.Message {
  getTickerStatus(): query_model_pb.TickerStatusMap[keyof query_model_pb.TickerStatusMap];
  setTickerStatus(value: query_model_pb.TickerStatusMap[keyof query_model_pb.TickerStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAllStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAllStatusRequest): UpdateAllStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAllStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAllStatusRequest;
  static deserializeBinaryFromReader(message: UpdateAllStatusRequest, reader: jspb.BinaryReader): UpdateAllStatusRequest;
}

export namespace UpdateAllStatusRequest {
  export type AsObject = {
    tickerStatus: query_model_pb.TickerStatusMap[keyof query_model_pb.TickerStatusMap],
  }
}

export class UpdateAllStatusResponse extends jspb.Message {
  getMsgCode(): system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap];
  setMsgCode(value: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearSymbolList(): void;
  getSymbolList(): Array<query_model_pb.Symbol>;
  setSymbolList(value: Array<query_model_pb.Symbol>): void;
  addSymbol(value?: query_model_pb.Symbol, index?: number): query_model_pb.Symbol;

  getTickerStatus(): query_model_pb.TickerStatusMap[keyof query_model_pb.TickerStatusMap];
  setTickerStatus(value: query_model_pb.TickerStatusMap[keyof query_model_pb.TickerStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAllStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAllStatusResponse): UpdateAllStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAllStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAllStatusResponse;
  static deserializeBinaryFromReader(message: UpdateAllStatusResponse, reader: jspb.BinaryReader): UpdateAllStatusResponse;
}

export namespace UpdateAllStatusResponse {
  export type AsObject = {
    msgCode: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap],
    msgText: string,
    symbolList: Array<query_model_pb.Symbol.AsObject>,
    tickerStatus: query_model_pb.TickerStatusMap[keyof query_model_pb.TickerStatusMap],
  }
}

export class UpdateAllStatusEvent extends jspb.Message {
  getMsgCode(): system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap];
  setMsgCode(value: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap]): void;

  getMsgText(): string;
  setMsgText(value: string): void;

  clearSymbolList(): void;
  getSymbolList(): Array<query_model_pb.Symbol>;
  setSymbolList(value: Array<query_model_pb.Symbol>): void;
  addSymbol(value?: query_model_pb.Symbol, index?: number): query_model_pb.Symbol;

  getTickerStatus(): query_model_pb.TickerStatusMap[keyof query_model_pb.TickerStatusMap];
  setTickerStatus(value: query_model_pb.TickerStatusMap[keyof query_model_pb.TickerStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAllStatusEvent.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAllStatusEvent): UpdateAllStatusEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAllStatusEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAllStatusEvent;
  static deserializeBinaryFromReader(message: UpdateAllStatusEvent, reader: jspb.BinaryReader): UpdateAllStatusEvent;
}

export namespace UpdateAllStatusEvent {
  export type AsObject = {
    msgCode: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap],
    msgText: string,
    symbolList: Array<query_model_pb.Symbol.AsObject>,
    tickerStatus: query_model_pb.TickerStatusMap[keyof query_model_pb.TickerStatusMap],
  }
}

