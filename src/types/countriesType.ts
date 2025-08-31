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
  methane?: number;
  oil_co2?: number;
  temperature_change_from_co2?: number;
  gas_co2?: number;
}
export type Countries = Country[];

export type ExtraColumns =
  | 'methane'
  | 'oil_co2'
  | 'temperature_change_from_co2'
  | 'gas_co2';
