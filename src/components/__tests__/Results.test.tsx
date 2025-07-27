import { render, screen } from '@testing-library/react';
import Results from '../Results';
import { mockPlanets } from '../../test-utils/mockdata/planets';
import { MemoryRouter } from 'react-router';

describe('Results Component', () => {
  it('should render loading spinner when loading is true', () => {
    const { container } = render(<Results results={[]} loading />);

    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should render error when error is present', () => {
    render(<Results results={[]} error="Something went wrong" />);

    expect(screen.getByRole('paragraph')).toHaveTextContent(
      'Something went wrong'
    );
  });

  it('should render no results found when results are empty', () => {
    render(<Results results={[]} />);

    expect(screen.getByRole('paragraph')).toHaveTextContent('No results found');
  });

  it('should render CardList when results exist', () => {
    render(
      <MemoryRouter>
        <Results results={mockPlanets} />
      </MemoryRouter>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(mockPlanets.length + 1);
    mockPlanets.forEach((result, idx) => {
      expect(cards[idx + 1]).toHaveTextContent(result.name);
    });
  });
});
