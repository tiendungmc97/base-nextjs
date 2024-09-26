import { unstable_setRequestLocale } from "next-intl/server";
export interface IAdminLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function AdminLayout(props: IAdminLayoutProps) {
  const { children, params } = props;
  unstable_setRequestLocale(params.locale);
  return <div>{children}</div>;
}
