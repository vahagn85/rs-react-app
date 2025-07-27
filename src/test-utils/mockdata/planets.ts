import type { Result } from '../../types/result.types';

export const mockPlanets: Partial<Result>[] = [
  { name: 'Earth', climate: 'Temperate' },
  { name: 'Mars', climate: 'Arctic' },
];

export const mockPlanet: Result = {
  name: 'Mars',
  rotation_period: '121',
  orbital_period: '2524',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surface_water: '1',
  population: '200000',
  url: 'https://test.test/1/',
};
