import { AxiosRequestConfig } from "axios";

const axiosJson: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
  timeout: 30000,
};

export { axiosJson };
