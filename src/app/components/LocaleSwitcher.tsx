"use client";

import { defaultLocale, locales } from "@/config/i18n";
import { usePathname, useRouter } from "@/navigation";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState, useTransition } from "react";
import useOnClickOutside from "../hook/useOnClickOutside";

export default function LocaleSwitcher() {
  const router = useRouter();
  const t = useTranslations("LocaleSwitcher");
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();
  const ref = useOnClickOutside<HTMLDivElement>(() => setShowDropdown(false));
  const [showDropdown, setShowDropdown] = useState(false);
  const [locale, setLocale] = useState<string>(currentLocale);
  const [isPending, startTransition] = useTransition();
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      setLocale(nextLocale);
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };
  return (
    <div
      className={clsx("relative", isPending && "transition-opacity [&:disabled]:opacity-30")}
      ref={ref}
    >
      <button
        onClick={handleDropdownToggle}
        className="flex w-full items-center justify-between rounded px-3 py-2"
      >
        {t("locale", { locale: locale })}
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
          className="absolute right-4 top-12 z-10 w-44 cursor-pointer divide-y divide-gray-100 rounded-lg bg-gray-100 font-normal shadow"
          onClick={handleDropdownToggle}
        >
          <ul>
            {locales.map((cur) => (
              <li
                key={cur}
                value={cur}
                onClick={() => onSelectChange(cur)}
                className={cur === locale ? "bg-slate-300 px-4 py-2" : "px-4 py-2"}
              >
                {t("locale", { locale: cur })}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
