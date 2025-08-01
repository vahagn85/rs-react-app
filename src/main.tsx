import { createRoot } from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import ErrorFallback from './components/ErrorFallback.tsx';
import { RouterProvider } from 'react-router';
import { router } from './routes.ts';
import ThemeProvider from './context/ThemeProvider.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary
      fallback={(resetError) => <ErrorFallback resetError={resetError} />}
    >
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
} else {
  throw new Error('Root element not found');
}
