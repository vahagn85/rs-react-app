import { create } from 'zustand';
import type { FormValues } from '../types/formTypes';

export type FormStore = {
  dataUncontrolled: FormValues | undefined;
  dataRHF: FormValues | undefined;
  updated: 'uncontrolled' | 'rhf' | boolean;
  addDataUncontrolled: (data: FormValues) => void;
  addDataRHF: (data: FormValues) => void;
  clearUpdated: () => void;
};

export const useFormStore = create<FormStore>((set) => ({
  dataUncontrolled: undefined,
  dataRHF: undefined,
  updated: false,
  addDataUncontrolled: (data) =>
    set({ dataUncontrolled: data, updated: 'uncontrolled' }),
  addDataRHF: (data) => set({ dataRHF: data, updated: 'rhf' }),
  clearUpdated: () => set({ updated: false }),
}));
