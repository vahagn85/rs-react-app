import type { AppAction, AppState } from './types';

const getInitialSearch = () => {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('search-swapi') || '';
};

export const initialState: AppState = {
  search: getInitialSearch(),
  results: [],
  count: 0,
  loading: true,
  error: null,
};

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'APP_SEARCH':
      return { ...state, search: action.payload };
    case 'APP_RESULTS':
      return { ...state, results: action.payload, count: action.count || 0 };
    case 'APP_LOADING':
      return { ...state, loading: action.payload };
    case 'APP_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
