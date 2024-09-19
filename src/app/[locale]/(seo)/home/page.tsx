"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { setInterval } from "timers";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const t = useTranslations("Home");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);
  return (
    <div className="bg-red-200 h-96 w-screen text-black text-center">
      {t("title")}
      <br />
      count: {count}
    </div>
  );
}
