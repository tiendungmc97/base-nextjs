"use client";

import { Account } from "@/interface/auth";
import { logout } from "@/redux/actions";
import { updateAccount } from "@/redux/slice/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

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
  useLayoutEffect(() => {
    if (!refreshToken || !expireTime || typeof window === "undefined") {
      router.push("/login");
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
  }, [refreshToken, expireTime, router, pathname, dispatch]);
  return <>{props.children}</>;
}
