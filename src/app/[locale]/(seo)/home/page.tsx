"use client";
import { useTranslations } from "next-intl";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const t = useTranslations("Home");
  return <div>{t("title")}</div>;
}
