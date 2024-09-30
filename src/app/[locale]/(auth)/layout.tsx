import { unstable_setRequestLocale } from "next-intl/server";
export interface ISeoLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function SeoLayout(props: ISeoLayoutProps) {
  const { children, params } = props;
  unstable_setRequestLocale(params.locale);
  return <>{children}</>;
}
