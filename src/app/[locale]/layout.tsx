import { locales } from '@/config/i18n';
import ReduxProvider from '@/provider/redux';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Archivo } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Archivo({
  weight: '400',
  subsets: ['latin'],
});
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Seo' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale: locale });
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ReduxProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
