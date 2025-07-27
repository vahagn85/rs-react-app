import { useReducer, useEffect } from 'react';
import { apiService } from '../services/api.service';

type State<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type Action<T> =
  | { type: 'DATA_INIT' }
  | { type: 'DATA_SUCCESS'; payload: T }
  | { type: 'DATA_ERROR'; payload: string | null };

function dataReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'DATA_INIT':
      return { ...state, loading: true, error: null };
    case 'DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'DATA_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const useData = <T>(url: string): State<T> => {
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

export default useData;
