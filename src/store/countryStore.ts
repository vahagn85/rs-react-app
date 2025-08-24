import { create } from 'zustand';
import countriesList from '../data/countries.json';

type Country = { code: string; name: string };

type CountryStore = {
  countries: Country[];
};

export const useCountryStore = create<CountryStore>(() => ({
  countries: countriesList,
}));
