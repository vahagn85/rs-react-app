import { QueryClient } from '@tanstack/react-query';

export const queryClientTest = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
