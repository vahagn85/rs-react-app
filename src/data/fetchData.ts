import type { CO2Data } from '../types/CountriesType';

let dataCache: CO2Data | null = null;
let promise: Promise<CO2Data> | null = null;

export function fetchData() {
  if (dataCache) {
    return dataCache;
  }

  if (!promise) {
    promise = fetch('/owid-co2-data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res.json();
      })
      .then((data) => {
        dataCache = data;
        return data;
      })
      .catch((error) => {
        promise = null;
        throw error;
      });
  }

  throw promise;
}
