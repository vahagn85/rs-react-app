import Header from '../../components/Header';
import Flyout from '../../components/Flyout';
import ThemeProvider from '../../context/ThemeProvider';
import { QueryProvider } from '../../providers/QueryProvider';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const theme = 'dark';
  return (
    <QueryProvider>
      <ThemeProvider>
        <NextIntlClientProvider>
          <div
            className={`flex flex-col min-h-screen h-[1px] ${theme === 'dark' ? 'dark' : ''}`}
          >
            <Header />
            <main className="bg-gray-100 dark:bg-gray-600 flex-1">
              {children}
            </main>
            <Flyout />
          </div>
        </NextIntlClientProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
