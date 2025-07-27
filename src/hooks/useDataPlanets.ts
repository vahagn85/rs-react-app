import { useCallback, useEffect, useReducer, useRef } from 'react';
import { appReducer, initialState } from '../reducer/app.reducer';
import { apiService } from '../services/api.service';
import type { ApiResponse } from '../types/result.types';

export function useDataPlanets(initSearch = '', initPage = '1') {
  const initRender = useRef(true);
  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchData = useCallback(
    async (searchValue: string, page: string = '1') => {
      dispatch({ type: 'APP_INIT', payload: true });
      try {
        const data = await apiService.getData<ApiResponse>('/planets', {
          page: page,
          search: searchValue || initSearch,
        });
        dispatch({
          type: 'APP_RESULTS',
          payload: data.results || [],
          count: data.count,
        });
      } catch (error) {
        dispatch({
          type: 'APP_ERROR',
          payload: error instanceof Error ? error.message : 'Request failed',
        });
      }
    },
    [initSearch]
  );

  useEffect(() => {
    if (initRender.current) {
      initRender.current = false;
      fetchData(initSearch, initPage);
    }
  }, [fetchData, initSearch, initPage]);

  return { ...state, fetchData };
}
