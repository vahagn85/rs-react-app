import type { StateCreator } from 'zustand';
import type { Result } from '../../types/result.types';

export interface SelectSlice {
  selected: Result[];
  addItem: (data: Result) => void;
  removeItem: (url: string) => void;
}
export const createSelectSlice: StateCreator<SelectSlice> = (set, get) => ({
  selected: [],

  addItem: (data) => {
    const currentSelected = get().selected;
    if (!currentSelected.some((item) => item.url === data.url)) {
      set({ selected: [...currentSelected, data] });
    }
  },

  removeItem: (url) => {
    const currentSelected = get().selected;
    set({ selected: currentSelected.filter((item) => item.url !== url) });
  },
});
