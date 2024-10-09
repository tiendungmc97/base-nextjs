"use client";
import { Link } from "@/navigation";
import { useState } from "react";
import useOnClickOutside from "../hook/useOnClickOutside";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/redux/store";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const t = useTranslations("Header");
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const navTable = useOnClickOutside<HTMLDivElement>(() => setShowDropdown(false));
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  if (!accessToken) return <></>;
  return (
    <div className="flex h-10 w-screen justify-between bg-gray-100 shadow-md">
      <div className="flex items-center gap-4 rounded-md py-2 ps-4">
        <Link href="/dashboard" className="transition-colors duration-300 hover:opacity-70">
          {t("dashboard")}
        </Link>
        <Link href="/home" className="transition-colors duration-300 hover:opacity-70">
          {t("home")}
        </Link>
        <div className="relative" ref={navTable}>
          <button
            onClick={handleDropdownToggle}
            className="flex w-full items-center justify-between rounded px-3 py-2"
          >
            {t("table")}
            <svg
              className="ms-3 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {showDropdown && (
            <div
              className="absolute left-0 top-12 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-gray-100 font-normal shadow"
              onClick={handleDropdownToggle}
            >
              <ul className="py-2 text-sm">
                <li>
                  <Link href="/table/client" className="block px-4 py-2 hover:bg-gray-100">
                    Table Client
                  </Link>
                </li>
                <li>
                  <Link href="/table/server" className="block px-4 py-2 hover:bg-gray-100">
                    Table Server
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <LocaleSwitcher />
    </div>
  );
}
