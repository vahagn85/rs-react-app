import { renderHook, waitFor } from '@testing-library/react';
import { useQueryPlanet } from '../useQueryPlanet';
import { createQueryWrapper } from '../../test-utils/createQueryWrapper';

vi.mock('../../services/api.service', () => ({
  apiService: {
    getData: vi.fn((url: string) => {
      if (url === '/planets/1') {
        return Promise.resolve({ name: 'Planet 1' });
      }
      return Promise.reject(new Error('Not found'));
    }),
  },
}));

describe('useQueryPlanet', () => {
  it('should returns planet data success', async () => {
    const wrapper = createQueryWrapper();

    const { result } = renderHook(() => useQueryPlanet('1'), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data?.name).toBe('Planet 1');
    });
  });

  it('should return error for wrong planet', async () => {
    const wrapper = createQueryWrapper();

    const { result } = renderHook(() => useQueryPlanet('3'), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error).toBeInstanceOf(Error);
  });
});
