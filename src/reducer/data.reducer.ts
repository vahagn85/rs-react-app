import type { Action, State } from './types';

export function dataReducer<T>(state: State<T>, action: Action<T>): State<T> {
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
