import { apiService } from '../services/api.service';
import type { ApiResponse } from '../types/result.types';
import { useQuery } from '@tanstack/react-query';

export function useQueryPlanets(initSearch = '', initPage = '1') {
  return useQuery({
    queryKey: ['planets', initSearch, initPage],
    queryFn: () =>
      apiService.getData<ApiResponse>('/planets', {
        page: initPage || '1',
        search: initSearch,
      }),
    staleTime: 1000 * 60 * 7,
    refetchOnWindowFocus: false,
  });
}
