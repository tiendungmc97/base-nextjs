// source: system_model.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.GroupType', null, global);
goog.exportSymbol('proto.LoginInfo', null, global);
goog.exportSymbol('proto.MsgCode', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoginInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LoginInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoginInfo.displayName = 'proto.LoginInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoginInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.LoginInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoginInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    login: jspb.Message.getFieldWithDefault(msg, 1, ""),
    macAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    localIp: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoginInfo}
 */
proto.LoginInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoginInfo;
  return proto.LoginInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoginInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoginInfo}
 */
proto.LoginInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMacAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoginInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoginInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoginInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMacAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLocalIp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string login = 1;
 * @return {string}
 */
proto.LoginInfo.prototype.getLogin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoginInfo} returns this
 */
proto.LoginInfo.prototype.setLogin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string mac_address = 3;
 * @return {string}
 */
proto.LoginInfo.prototype.getMacAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoginInfo} returns this
 */
proto.LoginInfo.prototype.setMacAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string local_ip = 4;
 * @return {string}
 */
proto.LoginInfo.prototype.getLocalIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoginInfo} returns this
 */
proto.LoginInfo.prototype.setLocalIp = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.GroupType = {
  GT_NONE: 0,
  GT_LP: 1,
  GT_RETAIL: 2
};

/**
 * @enum {number}
 */
proto.MsgCode = {
  MT_RET_OK_NONE: 0,
  MT_RET_OK: 1,
  MT_RET_ERROR: 2,
  MT_RET_ERR_PARAMS: 3,
  MT_RET_ERR_PERMISSIONS: 8,
  MT_RET_ERR_TIMEOUT: 9,
  MT_RET_ERR_NOTFOUND: 13,
  MT_RET_FORWARD_EXT_SYSTEM: 100,
  MT_RET_SUBCRIBE_OK: 310,
  MT_RET_SUBCRIBE_ALREADY: 311,
  MT_RET_SUBCRIBE_ERROR: 312,
  MT_RET_UNSUBCRIBE_OK: 320,
  MT_RET_UNSUBCRIBE_ERROR: 322,
  MT_RET_AUTH_ACCOUNT_INVALID: 1001,
  MT_RET_AUTH_ACCOUNT_DISABLED: 1002,
  MT_RET_REQUEST_INVALID_SYMBOL: 10013,
  MT_RET_REQUEST_INVALID_VOLUME: 10014,
  MT_RET_ERR_NOT_ENOUGH_MONEY: 10019,
  MT_RET_REQUEST_INVALID_FILL: 10030,
  MT_RET_REQUEST_LIMIT_VOLUME: 10034,
  MT_RET_REQUEST_INVALID_ORDER_TYPE: 10035,
  MT_RET_REQUEST_INVALID_LIMIT_PRICE: 10036,
  MT_RET_REQUEST_INVALID_TRIGGER_PRICE: 10037,
  MT_RET_REQUEST_PROHIBITED_OPEN_ORDER: 10038,
  MT_RET_REQUEST_PROHIBITED_CLOSE_ORDER: 10039,
  MT_RET_MARKET_CLOSED: 10040,
  MT_RET_INVALID_TICK_SIZE: 10041,
  MT_RET_INVALID_PRICE_RANGE: 10042,
  MT_RET_INVALID_MIN_LOT: 10043,
  MT_RET_INVALID_LOT_SIZE: 10044,
  MT_RET_NEGATIVE_QTY: 10045,
  MT_RET_EXCEED_MAX_ORDER_VOLUME: 10046,
  MT_RET_NOT_ENOUGH_MIN_ORDER_VALUE: 10047,
  MT_RET_INVALID_HOLIDAY_SESSION: 10048,
  MT_RET_INVALID_PASSWORD: 10049,
  MT_RET_TOKEN_EXPIRED: 10050,
  MT_RET_CHANGE_PASSWORD_FAILED: 10051,
  MT_RET_EXIST_LIMIT_ORDER_IN_QUEUE: 10052,
  MT_RET_EXCEED_MAX_ORDER_VALUE: 10053,
  MT_RET_UNKNOWN_ORDER_ID: 10054,
  MT_RET_ERROR_FROM_BO: 10055,
  MT_RET_ORDER_CLOSED: 10056,
  MT_RET_REQUEST_MARKET_ACCESS_DENIED: 10060,
  MT_RET_RMS_PROGRAM_ERROR: 20001,
  MT_RET_RMS_INVALID_INPUT: 20002,
  MT_RET_RMS_INVALID_SIDE: 20003,
  MT_RET_RMS_INVALID_COMPANY: 20004,
  MT_RET_RMS_INVALID_CURRENCY: 20005,
  MT_RET_RMS_INVALID_LINKAGE: 20006,
  MT_RET_RMS_NO_ACCESS: 20007,
  MT_RET_RMS_PASSWORD_FAILED: 20008,
  MT_RET_RMS_ERROR_COMPANY_INFO: 20009,
  MT_RET_RMS_PERMISSION_ACCESS: 20010,
  MT_RET_RMS_INVALID_ORDER_NO: 20011,
  MT_RET_RMS_INVALID_PRICE_LENGTH: 20012,
  MT_RET_RMS_STOP_PRICE_LENGTH: 20013,
  MT_RET_RMS_INVALID_ORDER_TYPE: 20014,
  MT_RET_RMS_INVALID_CLIENT: 20015,
  MT_RET_RMS_DB_ERROR: 20016,
  MT_RET_RMS_FAILED_RISK_CHECK: 30001
};

goog.object.extend(exports, proto);
