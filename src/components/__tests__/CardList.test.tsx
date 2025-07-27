import { render, screen } from '@testing-library/react';
import CardList from '../CardList';
import { mockPlanets } from '../../test-utils/mockdata/planets';
import { MemoryRouter } from 'react-router';

describe('CardList Component', () => {
  it('should render a list of card', () => {
    render(
      <MemoryRouter>
        <CardList results={mockPlanets} />
      </MemoryRouter>
    );

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(mockPlanets.length + 1);

    mockPlanets.forEach((result, idx) => {
      expect(cards[idx + 1]).toHaveTextContent(result.name);
    });
  });
});
