import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { MemoryRouter } from 'react-router';

describe('Card Component', () => {
  it('should render a card name and description', () => {
    render(
      <MemoryRouter>
        <Card name="Name" desc="Description" />
      </MemoryRouter>
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('should render a card with a default description when desc is "unknown"', () => {
    render(
      <MemoryRouter>
        <Card name="Name" desc="unknown" />
      </MemoryRouter>
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
  });

  it('should render as a link when not head', () => {
    render(
      <MemoryRouter>
        <Card name="Name" desc="Description" />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should not render as link when head is true', () => {
    render(
      <MemoryRouter>
        <Card name="Name" desc="Description" head />
      </MemoryRouter>
    );

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
