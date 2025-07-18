import { render, screen } from '@testing-library/react';
import CardList from '../CardList';
import { mockPlanets } from '../../test-utils/mockdata/planets';

describe('CardList Component', () => {
  it('should render a list of card', () => {
    render(<CardList results={mockPlanets} />);

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(mockPlanets.length + 1);

    mockPlanets.forEach((result, idx) => {
      expect(cards[idx + 1]).toHaveTextContent(result.name);
    });
  });
});
