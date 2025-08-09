import { apiService } from '../services/api.service';
import type { Result } from '../types/result.types';
import { useQuery } from '@tanstack/react-query';

export function useQueryPlanet(id: string) {
  return useQuery({
    queryKey: ['planet', id],
    queryFn: () => apiService.getData<Result>(`/planets/${id}`),
    staleTime: 1000 * 60 * 7,
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
}
