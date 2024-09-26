"use client";

import { Account } from "@/interface/auth";
import { logout } from "@/redux/actions";
import { updateAccount } from "@/redux/slice/auth";
import { purgeAndRehydrate, useAppDispatch, useAppSelector } from "@/redux/store";
import moment from "moment";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export interface TokenResponse {
  isExpired: boolean;
  accessToken: string;
  refreshToken: string;
  expireTime: string;
  error?: string;
}

export interface TokenMessage {
  refreshToken: string;
  expireTime: string;
}
export interface ITokenProviderProps {
  children: React.ReactNode;
}

export default function TokenProvider(props: ITokenProviderProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const expireTime = useAppSelector((state) => state.auth.expireTime);
  const pathname = usePathname();
  useEffect(() => {
    if (!refreshToken || !expireTime || typeof window === "undefined") {
      return;
    }
    const worker = new Worker("/web-worker/token-worker.js");
    worker.onmessage = (event: MessageEvent<TokenResponse>) => {
      const { isExpired, accessToken, refreshToken, expireTime, error } = event.data;
      if (!isExpired) {
        const params: Account = {
          accessToken,
          refreshToken,
          expireTime,
        };
        dispatch(updateAccount(params));
        if (pathname.includes("/login")) {
          router.push("/dashboard");
        }
      } else {
        dispatch(logout());
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
  }, [refreshToken, expireTime, pathname]);
  return <>{props.children}</>;
}
