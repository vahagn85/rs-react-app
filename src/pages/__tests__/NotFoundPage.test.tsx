import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotFoundPage from '../NotFoundPage';
import { MemoryRouter } from 'react-router';

describe('NotFoundPage', () => {
  it('should render 404 page content', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Page Not Found' })
    ).toBeInTheDocument();
  });

  it('should click the button to navigate to home page', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: 'Go to Homepage' });
    await user.click(button);
    expect(window.location.pathname).toBe('/');
  });
});
