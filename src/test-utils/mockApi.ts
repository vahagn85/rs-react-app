vi.mock('../services/api.service');
import { vi } from 'vitest';
import { mockPlanets } from './mockdata/planets';

import { apiService } from '../services/api.service';

const mockedApi = vi.mocked(apiService, true);

export function mockGetDataOnce() {
  mockedApi.getData.mockResolvedValueOnce({ results: mockPlanets });
}

export function mockErrorNetworkOnce() {
  mockedApi.getData.mockRejectedValueOnce(new Error('Network Error'));
}

export function mockErrorNotFoundOnce() {
  mockedApi.getData.mockImplementationOnce(() => {
    throw new Error('Not Found');
  });
}

export function mockGetSearchDataOnce(val: string) {
  mockedApi.getData.mockResolvedValueOnce({
    results: mockPlanets.filter((p) => p.name.includes(val)),
  });
}
