// package: 
// file: pricing_model.proto

import * as jspb from "google-protobuf";

export class Band extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  getVolume(): string;
  setVolume(value: string): void;

  getTradable(): boolean;
  setTradable(value: boolean): void;

  getNumOrders(): number;
  setNumOrders(value: number): void;

  getRetailVolume(): number;
  setRetailVolume(value: number): void;

  getRetailNumOrders(): number;
  setRetailNumOrders(value: number): void;

  getLpVolume(): number;
  setLpVolume(value: number): void;

  getLpNumOrders(): number;
  setLpNumOrders(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Band.AsObject;
  static toObject(includeInstance: boolean, msg: Band): Band.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Band, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Band;
  static deserializeBinaryFromReader(message: Band, reader: jspb.BinaryReader): Band;
}

export namespace Band {
  export type AsObject = {
    price: string,
    volume: string,
    tradable: boolean,
    numOrders: number,
    retailVolume: number,
    retailNumOrders: number,
    lpVolume: number,
    lpNumOrders: number,
  }
}

export class Quote extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSymbolId(): number;
  setSymbolId(value: number): void;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  clearAsksList(): void;
  getAsksList(): Array<Band>;
  setAsksList(value: Array<Band>): void;
  addAsks(value?: Band, index?: number): Band;

  clearBidsList(): void;
  getBidsList(): Array<Band>;
  setBidsList(value: Array<Band>): void;
  addBids(value?: Band, index?: number): Band;

  getLow(): string;
  setLow(value: string): void;

  getHigh(): string;
  setHigh(value: string): void;

  getOpen(): string;
  setOpen(value: string): void;

  getClose(): string;
  setClose(value: string): void;

  getRetailLow(): string;
  setRetailLow(value: string): void;

  getRetailHigh(): string;
  setRetailHigh(value: string): void;

  getRetailOpen(): string;
  setRetailOpen(value: string): void;

  getRetailClose(): string;
  setRetailClose(value: string): void;

  getNetChange(): string;
  setNetChange(value: string): void;

  getPctChange(): string;
  setPctChange(value: string): void;

  getScale(): number;
  setScale(value: number): void;

  getQuoteTime(): number;
  setQuoteTime(value: number): void;

  getTickPerDay(): number;
  setTickPerDay(value: number): void;

  getVolumePerDay(): string;
  setVolumePerDay(value: string): void;

  getCurrentPrice(): string;
  setCurrentPrice(value: string): void;

  getRetailPrice(): string;
  setRetailPrice(value: string): void;

  getRoute(): RouteQuoteMap[keyof RouteQuoteMap];
  setRoute(value: RouteQuoteMap[keyof RouteQuoteMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quote.AsObject;
  static toObject(includeInstance: boolean, msg: Quote): Quote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quote;
  static deserializeBinaryFromReader(message: Quote, reader: jspb.BinaryReader): Quote;
}

export namespace Quote {
  export type AsObject = {
    id: number,
    symbolId: number,
    symbolCode: string,
    asksList: Array<Band.AsObject>,
    bidsList: Array<Band.AsObject>,
    low: string,
    high: string,
    open: string,
    close: string,
    retailLow: string,
    retailHigh: string,
    retailOpen: string,
    retailClose: string,
    netChange: string,
    pctChange: string,
    scale: number,
    quoteTime: number,
    tickPerDay: number,
    volumePerDay: string,
    currentPrice: string,
    retailPrice: string,
    route: RouteQuoteMap[keyof RouteQuoteMap],
  }
}

export interface RouteQuoteMap {
  QUOTE_NONE: 0;
  QUOTE_USAH: 1;
  QUOTE_REFINITIV: 2;
  QUOTE_ICE: 3;
}

export const RouteQuote: RouteQuoteMap;

