import { formatNumber, getPlanetDetails } from '../planetUtils';
import { mockPlanet } from '../../test-utils/mockdata/planets';

describe('planetUtils Util', () => {
  describe('formatNumber', () => {
    it('should format a number toLocaleString', () => {
      expect(formatNumber('1000000')).toBe('1,000,000');
    });

    it('should return "Unknown" when input is "unknown"', () => {
      expect(formatNumber('unknown')).toBe('Unknown');
    });
  });

  describe('getPlanetDetails', () => {
    it('should return correct detail labels and values', () => {
      const details = getPlanetDetails(mockPlanet);
      expect(details).toHaveLength(8);
      expect(details).toEqual([
        { label: 'Rotation Period', value: '121 hours' },
        { label: 'Orbital Period', value: '2524 days' },
        { label: 'Diameter', value: '10,465 km' },
        { label: 'Climate', value: 'arid' },
        { label: 'Gravity', value: '1 standard' },
        { label: 'Terrain', value: 'desert' },
        { label: 'Surface Water', value: '1%' },
        { label: 'Population', value: '200,000' },
      ]);
    });
  });
});
