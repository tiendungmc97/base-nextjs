import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Archivo } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";

import { locales } from "@/config/i18n";
import { theme } from "@/config/theme-mui";
import "@/app/globals.css";
import ReduxProvider from "@/provider/Redux";
import TokenProvider from "@/provider/Token";
import Header from "../components/Header";

const inter = Archivo({
  weight: "400",
  subsets: ["latin"],
});
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "Seo" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale: locale });

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ReduxProvider>
          <TokenProvider>
            <NextIntlClientProvider messages={messages}>
              <ThemeProvider theme={theme}>
                <Header />
                {children}
              </ThemeProvider>
            </NextIntlClientProvider>
          </TokenProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
