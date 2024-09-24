"use client";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";

import { ReactNode } from "react";
// import test from "../../../../public";
interface TokenMessage {
  expireTime: string;
  refreshToken: string;
}

interface TokenResponse {
  accessToken?: string;
  expireTime?: string;
  refreshToken?: string;
  isExpired?: boolean;
  error?: string;
}

const Layout = ({ children }: { children: ReactNode }) => {
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const expireTime = useAppSelector((state) => state.auth.expireTime);

  useEffect(() => {
    if (!refreshToken || !expireTime || typeof window === "undefined") {
      return;
    }
    const worker = new Worker("/web-worker/token-worker.js");
    worker.onmessage = (event: MessageEvent<TokenResponse>) => {
      const { isExpired, accessToken, refreshToken, expireTime, error } = event.data;
      if (!isExpired) {
        // Refresh token
        console.log("Token refreshed", { accessToken, refreshToken, expireTime });
      } else {
        console.log(error);
      }
    };

    const tokenMessage: TokenMessage = {
      refreshToken,
      expireTime,
    };

    worker.postMessage(tokenMessage);

    return () => {
      worker.terminate();
    };
  }, [refreshToken, expireTime]);

  return <div>{children}</div>;
};

export default Layout;
