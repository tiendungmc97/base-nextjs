// package: 
// file: system_model.proto

import * as jspb from "google-protobuf";

export class LoginInfo extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  getMacAddress(): string;
  setMacAddress(value: string): void;

  getLocalIp(): string;
  setLocalIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LoginInfo): LoginInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginInfo;
  static deserializeBinaryFromReader(message: LoginInfo, reader: jspb.BinaryReader): LoginInfo;
}

export namespace LoginInfo {
  export type AsObject = {
    login: string,
    macAddress: string,
    localIp: string,
  }
}

export interface GroupTypeMap {
  GT_NONE: 0;
  GT_LP: 1;
  GT_RETAIL: 2;
}

export const GroupType: GroupTypeMap;

export interface MsgCodeMap {
  MT_RET_OK_NONE: 0;
  MT_RET_OK: 1;
  MT_RET_ERROR: 2;
  MT_RET_ERR_PARAMS: 3;
  MT_RET_ERR_PERMISSIONS: 8;
  MT_RET_ERR_TIMEOUT: 9;
  MT_RET_ERR_NOTFOUND: 13;
  MT_RET_FORWARD_EXT_SYSTEM: 100;
  MT_RET_SUBCRIBE_OK: 310;
  MT_RET_SUBCRIBE_ALREADY: 311;
  MT_RET_SUBCRIBE_ERROR: 312;
  MT_RET_UNSUBCRIBE_OK: 320;
  MT_RET_UNSUBCRIBE_ERROR: 322;
  MT_RET_AUTH_ACCOUNT_INVALID: 1001;
  MT_RET_AUTH_ACCOUNT_DISABLED: 1002;
  MT_RET_REQUEST_INVALID_SYMBOL: 10013;
  MT_RET_REQUEST_INVALID_VOLUME: 10014;
  MT_RET_ERR_NOT_ENOUGH_MONEY: 10019;
  MT_RET_REQUEST_INVALID_FILL: 10030;
  MT_RET_REQUEST_LIMIT_VOLUME: 10034;
  MT_RET_REQUEST_INVALID_ORDER_TYPE: 10035;
  MT_RET_REQUEST_INVALID_LIMIT_PRICE: 10036;
  MT_RET_REQUEST_INVALID_TRIGGER_PRICE: 10037;
  MT_RET_REQUEST_PROHIBITED_OPEN_ORDER: 10038;
  MT_RET_REQUEST_PROHIBITED_CLOSE_ORDER: 10039;
  MT_RET_MARKET_CLOSED: 10040;
  MT_RET_INVALID_TICK_SIZE: 10041;
  MT_RET_INVALID_PRICE_RANGE: 10042;
  MT_RET_INVALID_MIN_LOT: 10043;
  MT_RET_INVALID_LOT_SIZE: 10044;
  MT_RET_NEGATIVE_QTY: 10045;
  MT_RET_EXCEED_MAX_ORDER_VOLUME: 10046;
  MT_RET_NOT_ENOUGH_MIN_ORDER_VALUE: 10047;
  MT_RET_INVALID_HOLIDAY_SESSION: 10048;
  MT_RET_INVALID_PASSWORD: 10049;
  MT_RET_TOKEN_EXPIRED: 10050;
  MT_RET_CHANGE_PASSWORD_FAILED: 10051;
  MT_RET_EXIST_LIMIT_ORDER_IN_QUEUE: 10052;
  MT_RET_EXCEED_MAX_ORDER_VALUE: 10053;
  MT_RET_UNKNOWN_ORDER_ID: 10054;
  MT_RET_ERROR_FROM_BO: 10055;
  MT_RET_ORDER_CLOSED: 10056;
  MT_RET_REQUEST_MARKET_ACCESS_DENIED: 10060;
  MT_RET_RMS_PROGRAM_ERROR: 20001;
  MT_RET_RMS_INVALID_INPUT: 20002;
  MT_RET_RMS_INVALID_SIDE: 20003;
  MT_RET_RMS_INVALID_COMPANY: 20004;
  MT_RET_RMS_INVALID_CURRENCY: 20005;
  MT_RET_RMS_INVALID_LINKAGE: 20006;
  MT_RET_RMS_NO_ACCESS: 20007;
  MT_RET_RMS_PASSWORD_FAILED: 20008;
  MT_RET_RMS_ERROR_COMPANY_INFO: 20009;
  MT_RET_RMS_PERMISSION_ACCESS: 20010;
  MT_RET_RMS_INVALID_ORDER_NO: 20011;
  MT_RET_RMS_INVALID_PRICE_LENGTH: 20012;
  MT_RET_RMS_STOP_PRICE_LENGTH: 20013;
  MT_RET_RMS_INVALID_ORDER_TYPE: 20014;
  MT_RET_RMS_INVALID_CLIENT: 20015;
  MT_RET_RMS_DB_ERROR: 20016;
  MT_RET_RMS_FAILED_RISK_CHECK: 30001;
}

export const MsgCode: MsgCodeMap;

