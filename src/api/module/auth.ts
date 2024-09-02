import ApiUrl from "@/constant/apiUrl";
import { BodyLogin, BodyRegister, Login, Register } from "@/interface/auth";
import { IResponse } from "@/interface/common";
import client from "../service/client";

const authApi = {
  login(params: BodyLogin) {
    return client.post<IResponse<Login>>(ApiUrl.login, params);
  },
  register(params: BodyRegister) {
    return client.post<IResponse<Register>>(ApiUrl.register, params);
  },
};
export default authApi;
