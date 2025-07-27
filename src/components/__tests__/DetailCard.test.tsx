import { render, screen } from '@testing-library/react';
import DetailCard from '../DetailCard';
import { mockPlanet } from '../../test-utils/mockdata/planets';
import { getPlanetDetails } from '../../utils/planetUtils';

describe('DetailCard Component', () => {
  it('should render the planet name', () => {
    render(<DetailCard data={mockPlanet} />);

    expect(screen.getByText('Mars')).toBeInTheDocument();
  });

  it('should render all planet detail labels', () => {
    render(<DetailCard data={mockPlanet} />);

    const expectedDetails = getPlanetDetails(mockPlanet);
    for (const detail of expectedDetails) {
      expect(screen.getByText(detail.label)).toBeInTheDocument();
    }
  });
});
