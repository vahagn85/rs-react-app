import { useReducer, useEffect } from 'react';
import { apiService } from '../services/api.service';
import type { State } from '../reducer/types';
import { dataReducer } from '../reducer/data.reducer';

export const useData = <T>(url: string): State<T> => {
  const [state, dispatch] = useReducer(dataReducer<T>, {
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      dispatch({ type: 'DATA_INIT' });
      try {
        const data = await apiService.getData<T>(url);
        if (!ignore) {
          dispatch({ type: 'DATA_SUCCESS', payload: data });
        }
      } catch (error) {
        if (!ignore) {
          dispatch({
            type: 'DATA_ERROR',
            payload: error instanceof Error ? error.message : 'Request failed',
          });
        }
      }
    };

    fetchData();
    return () => {
      ignore = true;
    };
  }, [url]);

  return state;
};
