export type Result = {
  name: string;
  climate: string;
  url: string;
  diameter?: string;
  population?: string;
  terrain?: string;
  gravity?: string;
  rotation_period?: string;
  orbital_period?: string;
};

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}
