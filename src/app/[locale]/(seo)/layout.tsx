import LocaleSwitcher from "@/app/components/LocaleSwitcher";
import { unstable_setRequestLocale } from "next-intl/server";
export interface ISeoLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function SeoLayout(props: ISeoLayoutProps) {
  unstable_setRequestLocale(props.params.locale);
  const { children } = props;
  return <div>{children}</div>;
}
