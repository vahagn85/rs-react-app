import { useQueryClient } from '@tanstack/react-query';

export function useQueryRefresh(...key: unknown[]) {
  const queryClient = useQueryClient();

  const refresh = () => {
    queryClient.invalidateQueries({ queryKey: key });
  };

  return refresh;
}
