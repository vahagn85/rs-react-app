import type { Result } from '../types/result.types';

export interface AppState {
  results: Result[];
  count: number;
  loading: boolean;
  error: string | null;
}

export type AppAction =
  | { type: 'APP_RESULTS'; payload: Result[]; count: number }
  | { type: 'APP_INIT'; payload: boolean }
  | { type: 'APP_ERROR'; payload: string | null };

export type State<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export type Action<T> =
  | { type: 'DATA_INIT' }
  | { type: 'DATA_SUCCESS'; payload: T }
  | { type: 'DATA_ERROR'; payload: string | null };
