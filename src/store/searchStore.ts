import { create } from 'zustand';

interface SearchStoreState {
  search: string;
  setSearch: (value: string) => void;
}

export const useSearchStore = create<SearchStoreState>((set) => ({
  search:
    typeof window !== 'undefined'
      ? localStorage.getItem('search-swapi') || ''
      : '',
  setSearch: (value) => {
    set({ search: value });
    if (typeof window !== 'undefined')
      localStorage.setItem('search-swapi', value);
  },
}));
