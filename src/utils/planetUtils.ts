import type { Result } from '../types/result.types';

export const formatNumber = (num: string): string => {
  if (num === 'unknown') return 'Unknown';
  const parsed = Number(num);
  return isNaN(parsed) ? 'Unknown' : parsed.toLocaleString('en-US');
};

export const getPlanetDetails = (planet: Result) => {
  return [
    { label: 'Rotation Period', value: `${planet.rotation_period} hours` },
    { label: 'Orbital Period', value: `${planet.orbital_period} days` },
    {
      label: 'Diameter',
      value: `${formatNumber(planet.diameter as string)} km`,
    },
    { label: 'Climate', value: planet.climate },
    { label: 'Gravity', value: planet.gravity },
    { label: 'Terrain', value: planet.terrain },
    { label: 'Surface Water', value: `${planet.surface_water}%` },
    { label: 'Population', value: formatNumber(planet.population as string) },
  ];
};
