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
  return (
    <>
      <div className="flex h-10 w-screen justify-between bg-gray-100">
        <div></div>
        <LocaleSwitcher />
      </div>
      {children}
    </>
  );
}
