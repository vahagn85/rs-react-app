import type { Result } from '../types/result.types';

export interface AppState {
  search: string;
  results: Result[];
  loading: boolean;
  error: string | null;
}

export type AppAction =
  | { type: 'APP_SEARCH'; payload: string }
  | { type: 'APP_RESULTS'; payload: Result[] }
  | { type: 'APP_LOADING'; payload: boolean }
  | { type: 'APP_ERROR'; payload: string | null };
