"use client";
import { logout } from "@/redux/actions";
import { purgeAndRehydrate, useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

export interface IDashBoardProps {}

export default function DashBoard(props: IDashBoardProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="text-black">
      Dashboard
      <div className="flex gap-4 px-8 py-4">
        <button className="rounded-sm bg-red-400 p-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
