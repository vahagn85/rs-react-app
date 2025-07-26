import { createRoot } from 'react-dom/client';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import ErrorFallback from './components/ErrorFallback.tsx';
import { RouterProvider } from 'react-router';
import { router } from './routes.ts';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary
      fallback={(resetError) => <ErrorFallback resetError={resetError} />}
    >
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
} else {
  throw new Error('Root element not found');
}
