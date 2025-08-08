import { renderHook, waitFor } from '@testing-library/react';
import { useQueryPlanets } from '../useQueryPlanets';
import { createQueryWrapper } from '../../test-utils/createQueryWrapper';

vi.mock('../../services/api.service', () => ({
  apiService: {
    getData: vi.fn((url: string, params: { page: string; search: string }) => {
      if (url === '/planets' && params.page === '1' && params.search === '') {
        return Promise.resolve({
          results: [{ name: 'Planet A' }, { name: 'Planet B' }],
        });
      }

      return Promise.reject(new Error('Not found'));
    }),
  },
}));

describe('useQueryPlanet', () => {
  it('should return planets data success', async () => {
    const wrapper = createQueryWrapper();

    const { result } = renderHook(() => useQueryPlanets('', '1'), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data?.results.length).toBe(2);
    });
  });

  it('should return error when no matching planets', async () => {
    const wrapper = createQueryWrapper();

    const { result } = renderHook(() => useQueryPlanets('2', 'test'), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
      expect(result.current.error).toBeInstanceOf(Error);
    });
  });
});
