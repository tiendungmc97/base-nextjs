import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export interface IHomeProps {
  params: {
    locale: string;
  };
}

export default function Home(props: IHomeProps) {
  // const t = useTranslations("Home");
  return <div>Home</div>;
  // return <div>{t("title")}</div>;
}
