import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "ja", "vi"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/login": {
    en: "/login",
    ja: "/login",
    vi: "/login",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
