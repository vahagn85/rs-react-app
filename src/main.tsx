import { createRoot } from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import ErrorFallback from './components/ErrorFallback.tsx';
import { RouterProvider } from 'react-router';
import { router } from './routes.ts';
import ThemeProvider from './context/ThemeProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary
      fallback={(resetError) => <ErrorFallback resetError={resetError} />}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
} else {
  throw new Error('Root element not found');
}
