import type { AppAction, AppState } from './types';

export const initialState: AppState = {
  results: [],
  count: 0,
  loading: true,
  error: null,
};

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'APP_RESULTS':
      return {
        ...state,
        results: action.payload,
        count: action.count || 0,
        loading: false,
      };
    case 'APP_INIT':
      return { ...state, loading: true, error: null };
    case 'APP_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
