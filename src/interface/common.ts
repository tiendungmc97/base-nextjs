import { AxiosResponse } from "axios";

export enum MetaData {
    // Successful responses
    SUCCESS = 200,
    NO_CONTENT = 204,

    // Redirection messages
    MULTIPLE_CHOICE = 300,
    BAD_CREDENTIALS = 301,

    // Client error responses
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    ACTION_NOT_ALLOWED = 406,
    REQUEST_TIMEOUT = 407,
    USERNAME_OR_PASSWORD_INCORRECT = 408,
    DOB_INVALID = 409,
    TOKEN_EXPIRED = 410,
    TOKEN_INVALID = 411,
    HTTP_MEDIA_TYPE_NOT_SUPPORTED = 412,
    INPUT_ENCODING_DATA_INVALID = 413,
    SEND_REQUEST_TOO_MANY_TIMES = 414,
    EMAIL_EXIST = 415,
    REFRESH_TOKEN_IS_MISSING = 416,
    PASSWORD_INCORRECT = 417,
    PASSWORD_FAIL_TOO_MANY_TIMES = 418,
    SEND_OTP_GENERAL_MESSAGE = 419,
    PASSWORD_INVALID = 420,
    EMAIL_INVALID = 421,
    RESET_INSTRUCTIONS_SENT = 422,
    ACCESS_DENIED = 423,
    TYPE_INVALID = 424,
    YOU_DO_NOT_HAVE_RIGHTS = 425,
    PASSWORD_ALREADY_USED = 426,
    OTP_INVALID = 427,
    DEVICE_ID_INVALID = 428,
    NOT_VERIFIED = 429,
    PASSWORD_MISSING = 430,
    DEVICE_ID_MISSING = 431,
    GOOGLE_TOKEN_INVALID = 432,
    PARAMETERS_MISSING = 433,
    MISSING_SERVLET_REQUEST_PART = 434,
    MISSING_REQUEST_HEADER = 435,
    REQUEST_BODY_INVALID = 436,
    ONLY_NUMBER = 437,
    NSFW_TOGGLE_IS_INVALID = 438,
    NO_REQUEST_BODY = 439,
    DISPLAY_NAME_MISSING = 440,
    PAGE_INVALID = 441,
    PAGE_SIZE_INVALID = 442,
    CHARACTER_STYLE_INVALID = 443, // Fixed the duplicate value for 442
    CHATROOM_WITH_CHARACTER_EXIST = 457,
    // Server error responses
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503
}

export const MetaDataMessages: { [key in MetaData]: string } = {
    [MetaData.SUCCESS]: "Success",
    [MetaData.NO_CONTENT]: "No Content",
    [MetaData.MULTIPLE_CHOICE]: "Multiple Choice",
    [MetaData.BAD_CREDENTIALS]: "Bad Credentials",
    [MetaData.BAD_REQUEST]: "Bad request",
    [MetaData.UNAUTHORIZED]: "Unauthorized",
    [MetaData.PAYMENT_REQUIRED]: "Payment Required",
    [MetaData.FORBIDDEN]: "Forbidden",
    [MetaData.NOT_FOUND]: "Not Found",
    [MetaData.METHOD_NOT_ALLOWED]: "Method Not Allowed",
    [MetaData.ACTION_NOT_ALLOWED]: "Action Not Allowed",
    [MetaData.REQUEST_TIMEOUT]: "Request Timeout",
    [MetaData.USERNAME_OR_PASSWORD_INCORRECT]: "Incorrect username or password.",
    [MetaData.DOB_INVALID]: "Dob is wrong format",
    [MetaData.TOKEN_EXPIRED]: "Token expired",
    [MetaData.TOKEN_INVALID]: "Token invalid",
    [MetaData.HTTP_MEDIA_TYPE_NOT_SUPPORTED]: "Http Media Type Not Supported",
    [MetaData.INPUT_ENCODING_DATA_INVALID]: "Input encoding data invalid",
    [MetaData.SEND_REQUEST_TOO_MANY_TIMES]: "Send request too many times",
    [MetaData.EMAIL_EXIST]: "Email is exist",
    [MetaData.REFRESH_TOKEN_IS_MISSING]: "Refresh token is missing",
    [MetaData.PASSWORD_INCORRECT]: "Incorrect username or password.",
    [MetaData.PASSWORD_FAIL_TOO_MANY_TIMES]: "Password failed more than the specified number of times",
    [MetaData.SEND_OTP_GENERAL_MESSAGE]: "We have sent you the OTP code via %s. Please take a look.",
    [MetaData.PASSWORD_INVALID]: "Password must contain at least 8 characters, at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
    [MetaData.EMAIL_INVALID]: "Email is invalid",
    [MetaData.RESET_INSTRUCTIONS_SENT]: "If we found an eligible account associated with that email, we've sent password reset instructions to the email address on the account.",
    [MetaData.ACCESS_DENIED]: "Access is denied",
    [MetaData.TYPE_INVALID]: "Type is invalid",
    [MetaData.YOU_DO_NOT_HAVE_RIGHTS]: "You do not have rights to do this action",
    [MetaData.PASSWORD_ALREADY_USED]: "The new password is the same as one of your three previous passwords. Please enter a new ones",
    [MetaData.OTP_INVALID]: "Verification code is invalid",
    [MetaData.DEVICE_ID_INVALID]: "Device id is invalid",
    [MetaData.NOT_VERIFIED]: "You have not entered the OTP",
    [MetaData.PASSWORD_MISSING]: "Password is missing",
    [MetaData.DEVICE_ID_MISSING]: "Device id is missing",
    [MetaData.GOOGLE_TOKEN_INVALID]: "Google token is invalid",
    [MetaData.PARAMETERS_MISSING]: "Parameters is missing",
    [MetaData.MISSING_SERVLET_REQUEST_PART]: "Missing Servlet Request Part",
    [MetaData.MISSING_REQUEST_HEADER]: "Missing Request Header",
    [MetaData.REQUEST_BODY_INVALID]: "Request body is invalid",
    [MetaData.ONLY_NUMBER]: "Params allows only number",
    [MetaData.NSFW_TOGGLE_IS_INVALID]: "Nsfw toggle is invalid",
    [MetaData.NO_REQUEST_BODY]: "Request body is missing",
    [MetaData.DISPLAY_NAME_MISSING]: "Display name is missing",
    [MetaData.PAGE_INVALID]: "Param page must be greater than 0",
    [MetaData.PAGE_SIZE_INVALID]: "Param page_size must be greater than 0",
    [MetaData.CHARACTER_STYLE_INVALID]: "Character style is invalid",
    [MetaData.CHATROOM_WITH_CHARACTER_EXIST]: "Chatroom with character already exist",
    [MetaData.INTERNAL_SERVER_ERROR]: "Internal Server Error",
    [MetaData.BAD_GATEWAY]: "Bad Gateway",
    [MetaData.SERVICE_UNAVAILABLE]: "Service Unavailable"
};

export interface IMeta {
  code: MetaData;
  message: string;
}

export interface IResponse<T> {
  meta: IMeta[];
  data: T;
}

export interface Pagination {
    totalRecords: number
    currentPage: number
    totalPages: number
    nextPage: number
    prevPage: any
}

export interface IResponsePagination<T> {
  meta: IMeta[];
  data: T;
  pagination: Pagination;
}
