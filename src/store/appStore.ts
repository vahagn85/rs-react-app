import { create } from 'zustand';
import { createSelectSlice, type SelectSlice } from './slice/selectSlice';

export type AppStoreState = SelectSlice;

export const useAppStore = create<AppStoreState>((...args) => ({
  ...createSelectSlice(...args),
}));
