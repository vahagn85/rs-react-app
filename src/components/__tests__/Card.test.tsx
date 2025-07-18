import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card Component', () => {
  it('should render a card name and description', () => {
    render(<Card name="Name" desc="Description" />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('should render a card with a default description when desc is "unknown"', () => {
    render(<Card name="Name" desc="unknown" />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
  });
});
