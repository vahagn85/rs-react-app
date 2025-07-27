import { MemoryRouter } from 'react-router';
import Header from '../Header';
import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
  it('should render header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should render the Navigation component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should displays the Star Wars link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logoLink = screen.getByRole('link', { name: /star wars/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
