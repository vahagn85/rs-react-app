import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';
import { MemoryRouter } from 'react-router';

describe('Navigation Component', () => {
  it('should render navigation', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should renders all navigation links(About)', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('should render correct About link path', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
});
