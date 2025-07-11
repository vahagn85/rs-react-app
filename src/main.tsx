import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import ErrorFallback from './components/ErrorFallback.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary
      fallback={(resetError) => <ErrorFallback resetError={resetError} />}
    >
      <App />
    </ErrorBoundary>
  );
} else {
  throw new Error('Root element not found');
}
