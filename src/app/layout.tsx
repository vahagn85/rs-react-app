import type { Metadata } from 'next';
import Header from '../components/Header';
import Flyout from '../components/Flyout';
import ThemeProvider from '../context/ThemeProvider';
import { QueryProvider } from '../providers/QueryProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'RS React app',
  description: 'React app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = 'dark';
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div id="root">
          <QueryProvider>
            <ThemeProvider>
              <div
                className={`flex flex-col min-h-screen h-[1px] ${theme === 'dark' ? 'dark' : ''}`}
              >
                <Header />
                <main className="bg-gray-100 dark:bg-gray-600 flex-1">
                  {children}
                </main>
                <Flyout />
              </div>
            </ThemeProvider>
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
