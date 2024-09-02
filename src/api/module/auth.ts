import ApiUrl from "@/constant/apiUrl";
import { BodyLogin, BodyRegister, LoginData, Register } from "@/interface/auth";
import { IResponse } from "@/interface/common";
import client from "../service/client";

const authApi = {
  login(params: BodyLogin) {
    return client.post<IResponse<LoginData>>(ApiUrl.login, params);
  },
  register(params: BodyRegister) {
    return client.post<IResponse<Register>>(ApiUrl.register, params);
  },
};
export default authApi;
