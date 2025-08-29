export interface CountryData {
  iso_code?: string;
  data: CO2YearData[];
}

export interface CO2YearData {
  [key: string]: unknown;
}

export interface CO2Data {
  [key: string]: CountryData;
}

export interface Country {
  name: string;
  isoCode?: string;
  population?: number;
  year: number;
  co2?: number;
  co2_per_capita?: number;
}
export type Countries = Country[];
