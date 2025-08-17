import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RS React app',
  description: 'React app description',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
