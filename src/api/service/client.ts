import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { axiosJson } from "@/config/api";
import { MetaData } from "@/interface/common";
const client = axios.create(axiosJson);

client.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    // Retreive token from Redux OR localStorage or ....
    const token = "";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Credentials"] = true;
    }
    return config;
  }
);

client.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (error) => {
    if (error?.response?.status === MetaData.FORBIDDEN) {
      // Handle forbidden error
    }
    if (error?.response?.status === MetaData.UNAUTHORIZED) {
      // Handle unauthorized error
    } else {
      throw error;
    }
  }
);

export default client;
