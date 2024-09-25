export interface BodyLogin {
  username: string;
  password: string;
}
export interface BodyRegister {
  username: string;
  password: string;
}
export interface Account {
  accessToken: string;
  refreshToken: string;
  expireTime: string;
}
export interface LoginData {
  accessToken: string;
  refreshToken: string;
  expireTime: string;
  account: Account;
}
export interface Register {
  email: string;
  token: string;
}
