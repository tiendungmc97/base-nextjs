// package: 
// file: trading_model.proto

import * as jspb from "google-protobuf";
import * as system_model_pb from "./system_model_pb";
import * as query_model_pb from "./query_model_pb";

export class Order extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getSymbolCode(): string;
  setSymbolCode(value: string): void;

  getOrderType(): OrderTypeMap[keyof OrderTypeMap];
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  getState(): OrderStateMap[keyof OrderStateMap];
  setState(value: OrderStateMap[keyof OrderStateMap]): void;

  getAmount(): string;
  setAmount(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getSlippage(): string;
  setSlippage(value: string): void;

  getOrderFilling(): OrderFillingMap[keyof OrderFillingMap];
  setOrderFilling(value: OrderFillingMap[keyof OrderFillingMap]): void;

  getExecuteMode(): ExecutionModeMap[keyof ExecutionModeMap];
  setExecuteMode(value: ExecutionModeMap[keyof ExecutionModeMap]): void;

  getReason(): OrderReasonMap[keyof OrderReasonMap];
  setReason(value: OrderReasonMap[keyof OrderReasonMap]): void;

  getOrderTime(): OrderTimeMap[keyof OrderTimeMap];
  setOrderTime(value: OrderTimeMap[keyof OrderTimeMap]): void;

  getExpireTime(): number;
  setExpireTime(value: number): void;

  getTp(): string;
  setTp(value: string): void;

  getSl(): string;
  setSl(value: string): void;

  getPl(): string;
  setPl(value: string): void;

  getSwap(): string;
  setSwap(value: string): void;

  getFee(): string;
  setFee(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getNote(): string;
  setNote(value: string): void;

  getEntry(): OrderEntryMap[keyof OrderEntryMap];
  setEntry(value: OrderEntryMap[keyof OrderEntryMap]): void;

  getRoute(): OrderRouteMap[keyof OrderRouteMap];
  setRoute(value: OrderRouteMap[keyof OrderRouteMap]): void;

  getOrderMode(): OrderModeMap[keyof OrderModeMap];
  setOrderMode(value: OrderModeMap[keyof OrderModeMap]): void;

  getUid(): number;
  setUid(value: number): void;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): void;

  getFilledAmount(): string;
  setFilledAmount(value: string): void;

  getLastPrice(): string;
  setLastPrice(value: string): void;

  getExecutedDatetime(): string;
  setExecutedDatetime(value: string): void;

  getSide(): query_model_pb.SideMap[keyof query_model_pb.SideMap];
  setSide(value: query_model_pb.SideMap[keyof query_model_pb.SideMap]): void;

  getExternalOrderId(): string;
  setExternalOrderId(value: string): void;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): void;

  getTotalFilledAmount(): string;
  setTotalFilledAmount(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getOrderRef(): string;
  setOrderRef(value: string): void;

  getWithdrawAmount(): string;
  setWithdrawAmount(value: string): void;

  getSubmittedId(): string;
  setSubmittedId(value: string): void;

  getMsgCode(): system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap];
  setMsgCode(value: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap]): void;

  getGroupType(): system_model_pb.GroupTypeMap[keyof system_model_pb.GroupTypeMap];
  setGroupType(value: system_model_pb.GroupTypeMap[keyof system_model_pb.GroupTypeMap]): void;

  getExternalState(): ExternalStateMap[keyof ExternalStateMap];
  setExternalState(value: ExternalStateMap[keyof ExternalStateMap]): void;

  getAllowMatching(): boolean;
  setAllowMatching(value: boolean): void;

  getExistedInBo(): boolean;
  setExistedInBo(value: boolean): void;

  getOrderMarketCode(): string;
  setOrderMarketCode(value: string): void;

  getExecutedMarketCode(): string;
  setExecutedMarketCode(value: string): void;

  getCqB2bAccountNo(): string;
  setCqB2bAccountNo(value: string): void;

  getCqClSetCurrency(): string;
  setCqClSetCurrency(value: string): void;

  getTransferMode(): TransferModeMap[keyof TransferModeMap];
  setTransferMode(value: TransferModeMap[keyof TransferModeMap]): void;

  getOrderGateway(): OrderGatewayMap[keyof OrderGatewayMap];
  setOrderGateway(value: OrderGatewayMap[keyof OrderGatewayMap]): void;

  clearPositionIdList(): void;
  getPositionIdList(): Array<string>;
  setPositionIdList(value: Array<string>): void;
  addPositionId(value: string, index?: number): string;

  getOrigExtOrderId(): string;
  setOrigExtOrderId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    orderId: string,
    symbolCode: string,
    orderType: OrderTypeMap[keyof OrderTypeMap],
    state: OrderStateMap[keyof OrderStateMap],
    amount: string,
    price: string,
    slippage: string,
    orderFilling: OrderFillingMap[keyof OrderFillingMap],
    executeMode: ExecutionModeMap[keyof ExecutionModeMap],
    reason: OrderReasonMap[keyof OrderReasonMap],
    orderTime: OrderTimeMap[keyof OrderTimeMap],
    expireTime: number,
    tp: string,
    sl: string,
    pl: string,
    swap: string,
    fee: string,
    time: number,
    note: string,
    entry: OrderEntryMap[keyof OrderEntryMap],
    route: OrderRouteMap[keyof OrderRouteMap],
    orderMode: OrderModeMap[keyof OrderModeMap],
    uid: number,
    triggerPrice: string,
    filledAmount: string,
    lastPrice: string,
    executedDatetime: string,
    side: query_model_pb.SideMap[keyof query_model_pb.SideMap],
    externalOrderId: string,
    currencyCode: string,
    totalFilledAmount: string,
    comment: string,
    orderRef: string,
    withdrawAmount: string,
    submittedId: string,
    msgCode: system_model_pb.MsgCodeMap[keyof system_model_pb.MsgCodeMap],
    groupType: system_model_pb.GroupTypeMap[keyof system_model_pb.GroupTypeMap],
    externalState: ExternalStateMap[keyof ExternalStateMap],
    allowMatching: boolean,
    existedInBo: boolean,
    orderMarketCode: string,
    executedMarketCode: string,
    cqB2bAccountNo: string,
    cqClSetCurrency: string,
    transferMode: TransferModeMap[keyof TransferModeMap],
    orderGateway: OrderGatewayMap[keyof OrderGatewayMap],
    positionIdList: Array<string>,
    origExtOrderId: string,
  }
}

export interface ExchangeCodeMap {
  EXCHANGE_CODE_NONE: 0;
  EXCHANGE_TSE: 1;
  EXCHANGE_NSE: 3;
  EXCHANGE_FSE: 6;
  EXCHANGE_SSE: 8;
  EXCHANGE_OSE: 10;
  EXCHANGE_TOCOM: 11;
}

export const ExchangeCode: ExchangeCodeMap;

export interface OrderTypeMap {
  OP_NONE: 0;
  OP_LIMIT: 1;
  OP_STOP: 2;
  OP_MARKET: 3;
  OP_STOP_LIMIT: 4;
  OP_MTL: 5;
  OP_STM: 6;
}

export const OrderType: OrderTypeMap;

export interface ExecutionModeMap {
  EXECUTION_MODE_NONE: 0;
  MARKET: 1;
  INSTANT: 2;
}

export const ExecutionMode: ExecutionModeMap;

export interface OrderModeMap {
  ORDER_MODE_NONE: 0;
  OCO: 10;
  IFD: 20;
  IFO: 30;
  REGULAR: 40;
}

export const OrderMode: OrderModeMap;

export interface TransferModeMap {
  TRANSFER_MODE_NONE: 0;
  TRANSFER_MODE_MANUAL: 1;
  TRANSFER_MODE_AUTO: 2;
}

export const TransferMode: TransferModeMap;

export interface OrderGatewayMap {
  ORDER_GATEWAY_NONE: 0;
  ORDER_GATEWAY_USAH: 1;
  ORDER_GATEWAY_PIX: 2;
}

export const OrderGateway: OrderGatewayMap;

export interface OrderFillingMap {
  ORDER_FILL_NONE: 0;
  ORDER_FILL_FAK: 5;
  ORDER_FILL_FAS: 6;
  ORDER_FILL_FOK: 7;
}

export const OrderFilling: OrderFillingMap;

export interface OrderTimeMap {
  ORDER_TIME_NONE: 0;
  ORDER_TIME_DAY: 1;
  ORDER_TIME_SPECIFIED: 2;
  ORDER_TIME_SPECIFIED_DAY: 3;
  ORDER_TIME_GTC: 11;
}

export const OrderTime: OrderTimeMap;

export interface OrderStateMap {
  ORDER_STATE_NONE: 0;
  ORDER_STATE_PLACED: 1;
  ORDER_STATE_CANCELED: 2;
  ORDER_STATE_PARTIAL: 3;
  ORDER_STATE_FILLED: 4;
  ORDER_STATE_REJECTED: 5;
  ORDER_STATE_EXPIRED: 6;
  ORDER_STATE_MODIFIED: 7;
  ORDER_STATE_MATCHED: 10;
  ORDER_STATE_STARTED: 11;
}

export const OrderState: OrderStateMap;

export interface OrderEntryMap {
  ENTRY_NONE: 0;
  ENTRY_OUT: 1;
  ENTRY_IN: 2;
}

export const OrderEntry: OrderEntryMap;

export interface OrderReasonMap {
  REASON_NONE: 0;
  REASON_API: 1;
  REASON_DEALER: 2;
  REASON_SL: 3;
  REASON_TP: 4;
  REASON_SO: 5;
  REASON_ROLLOVER: 6;
  REASON_CLIENT: 10;
}

export const OrderReason: OrderReasonMap;

export interface OrderRouteMap {
  ROUTE_NONE: 0;
  ROUTE_IOS: 1;
  ROUTE_ANDROID: 2;
  ROUTE_BACK: 3;
  ROUTE_API: 4;
  ROUTE_WEB: 5;
  ROUTE_FIX: 6;
  ROUTE_CQ: 7;
}

export const OrderRoute: OrderRouteMap;

export interface ModifyTypeMap {
  MODIFY_TYPE_NONE: 0;
  CANCEL: 2;
  UPDATE: 3;
}

export const ModifyType: ModifyTypeMap;

export interface ExternalStateMap {
  EXTERNAL_STATE_NONE: 0;
  EXTERNAL_STATE_WAITING: 1;
  EXTERNAL_STATE_RECEIVED: 2;
  EXTERNAL_STATE_NEW: 3;
  EXTERNAL_STATE_CANCELED: 4;
  EXTERNAL_STATE_PARTIAL: 5;
  EXTERNAL_STATE_FILLED: 6;
  EXTERNAL_STATE_REJECTED: 7;
  EXTERNAL_STATE_EXPIRED: 8;
  EXTERNAL_STATE_MODIFIED: 9;
  EXTERNAL_STATE_UNLOCK: 10;
  EXTERNAL_STATE_CANCEL_REJECT: 11;
}

export const ExternalState: ExternalStateMap;

