"use client";
import { Account } from "@/interface/auth";
import { logout } from "@/redux/actions";
import { updateAccount } from "@/redux/slice/auth";
import { persistor, purgeAndRehydrate, store, useAppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

export interface IDashBoardProps {}

export default function DashBoard(props: IDashBoardProps) {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    purgeAndRehydrate();
  };
  const handleLogin = () => {
    const params: Account = {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
      expireTime: "2026-12-31T23:59:59Z",
    };
    dispatch(updateAccount(params));
  };
  return (
    <div className="text-black">
      Dashboard
      <div className="flex gap-4 px-8 py-4">
        <button className="rounded-sm bg-red-400 p-2" onClick={handleLogin}>
          Login
        </button>
        <button className="rounded-sm bg-red-400 p-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
