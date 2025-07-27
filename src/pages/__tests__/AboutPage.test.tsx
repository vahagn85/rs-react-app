import { render, screen } from '@testing-library/react';
import AboutPage from '../AboutPage';

describe('AboutPage', () => {
  it('should render the heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });

  it('should render the author section', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', { name: 'Author Information' })
    ).toBeInTheDocument();
    expect(screen.getByText(/Hi! My name is Vahagn/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'vahagn85' })).toBeInTheDocument();
  });

  it('should render the School section', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', { name: /RS School React course/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Visit RS School React course' })
    ).toBeInTheDocument();
  });
});
