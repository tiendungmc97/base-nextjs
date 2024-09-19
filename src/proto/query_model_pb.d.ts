// package: 
// file: query_model.proto

import * as jspb from "google-protobuf";

export class Symbol extends jspb.Message {
  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getSymbolName(): string;
  setSymbolName(value: string): void;

  getSellStatus(): SellStatusMap[keyof SellStatusMap];
  setSellStatus(value: SellStatusMap[keyof SellStatusMap]): void;

  getBuyStatus(): BuyStatusMap[keyof BuyStatusMap];
  setBuyStatus(value: BuyStatusMap[keyof BuyStatusMap]): void;

  getSpread(): string;
  setSpread(value: string): void;

  getAggregation(): string;
  setAggregation(value: string): void;

  getSymbolStatus(): SymbolStatusMap[keyof SymbolStatusMap];
  setSymbolStatus(value: SymbolStatusMap[keyof SymbolStatusMap]): void;

  getTickSize(): string;
  setTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Symbol.AsObject;
  static toObject(includeInstance: boolean, msg: Symbol): Symbol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Symbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Symbol;
  static deserializeBinaryFromReader(message: Symbol, reader: jspb.BinaryReader): Symbol;
}

export namespace Symbol {
  export type AsObject = {
    symbolCode: string,
    symbolName: string,
    sellStatus: SellStatusMap[keyof SellStatusMap],
    buyStatus: BuyStatusMap[keyof BuyStatusMap],
    spread: string,
    aggregation: string,
    symbolStatus: SymbolStatusMap[keyof SymbolStatusMap],
    tickSize: string,
  }
}

export class SymbolSetting extends jspb.Message {
  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getSellStatus(): SellStatusMap[keyof SellStatusMap];
  setSellStatus(value: SellStatusMap[keyof SellStatusMap]): void;

  getBuyStatus(): BuyStatusMap[keyof BuyStatusMap];
  setBuyStatus(value: BuyStatusMap[keyof BuyStatusMap]): void;

  getSpread(): string;
  setSpread(value: string): void;

  getAggregation(): string;
  setAggregation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolSetting.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolSetting): SymbolSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolSetting;
  static deserializeBinaryFromReader(message: SymbolSetting, reader: jspb.BinaryReader): SymbolSetting;
}

export namespace SymbolSetting {
  export type AsObject = {
    symbolCode: string,
    sellStatus: SellStatusMap[keyof SellStatusMap],
    buyStatus: BuyStatusMap[keyof BuyStatusMap],
    spread: string,
    aggregation: string,
  }
}

export class Position extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getSide(): SideMap[keyof SideMap];
  setSide(value: SideMap[keyof SideMap]): void;

  getAmount(): string;
  setAmount(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getUid(): number;
  setUid(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getUpdateTime(): number;
  setUpdateTime(value: number): void;

  getPositionStatus(): PositionStatusMap[keyof PositionStatusMap];
  setPositionStatus(value: PositionStatusMap[keyof PositionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    id: string,
    symbolCode: string,
    side: SideMap[keyof SideMap],
    amount: string,
    price: string,
    uid: number,
    createTime: number,
    updateTime: number,
    positionStatus: PositionStatusMap[keyof PositionStatusMap],
  }
}

export interface SideMap {
  SIDE_NONE: 0;
  SIDE_BUY: 1;
  SIDE_SELL: 2;
}

export const Side: SideMap;

export interface SymbolStatusMap {
  SYMBOL_NONE: 0;
  SYMBOL_ACTIVE: 1;
  SYMBOL_DEACTIVE: 2;
}

export const SymbolStatus: SymbolStatusMap;

export interface SellStatusMap {
  SELL_STATUS_NONE: 0;
  SELL_STATUS_ACTIVE: 1;
  SELL_STATUS_DEACTIVE: 2;
}

export const SellStatus: SellStatusMap;

export interface BuyStatusMap {
  BUY_STATUS_NONE: 0;
  BUY_STATUS_ACTIVE: 1;
  BUY_STATUS_DEACTIVE: 2;
}

export const BuyStatus: BuyStatusMap;

export interface ActionMap {
  MODE_NONE: 0;
  MODE_NEW: 1;
  MODE_UPDATE: 2;
  MODE_DELETE: 3;
}

export const Action: ActionMap;

export interface PositionStatusMap {
  POSITION_STATUS_NONE: 0;
  POSITION_STATUS_PENDING: 1;
}

export const PositionStatus: PositionStatusMap;

export interface TickerStatusMap {
  TICKER_STATUS_NONE: 0;
  TICKER_STATUS_ACTIVE: 1;
  TICKER_STATUS_DEACTIVE: 2;
}

export const TickerStatus: TickerStatusMap;

