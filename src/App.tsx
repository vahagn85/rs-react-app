import { useReducer, useCallback, useEffect, useRef } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import type { ApiResponse } from './types/result.types';
import { apiService } from './services/api.service';
import { appReducer, initialState } from './reducer/app.reducer';

const App = () => {
  const initRender = useRef(true);
  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleSearch = (search: string) => {
    dispatch({ type: 'APP_SEARCH', payload: search });
  };

  const fetchData = useCallback(async (searchValue: string) => {
    if (searchValue.trim()) {
      localStorage.setItem('search-swapi', searchValue.trim());
    }
    dispatch({ type: 'APP_LOADING', payload: true });
    dispatch({ type: 'APP_ERROR', payload: null });
    try {
      const data = await apiService.getData<ApiResponse>('/planets', {
        searchValue,
      });
      dispatch({ type: 'APP_RESULTS', payload: data.results || [] });
    } catch (error) {
      dispatch({
        type: 'APP_ERROR',
        payload: error instanceof Error ? error.message : 'Request failed',
      });
    } finally {
      dispatch({ type: 'APP_LOADING', payload: false });
    }
  }, []);

  useEffect(() => {
    if (initRender.current) {
      initRender.current = false;
      fetchData(state.search);
    }
  }, [fetchData, state.search]);

  const handleClick = () => {
    fetchData(state.search);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Search
        search={state.search}
        onSearch={handleSearch}
        onClick={handleClick}
      />
      <Results
        results={state.results}
        loading={state.loading}
        error={state.error}
      />
    </div>
  );
};

export default App;
