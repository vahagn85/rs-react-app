import {
  mockErrorNetworkOnce,
  mockErrorNotFoundOnce,
  mockGetDataOnce,
  mockGetSearchDataOnce,
} from '../../test-utils/mockApi';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import ErrorBoundary from '../ErrorBoundary';
import ErrorFallback from '../ErrorFallback';
import { mockPlanets } from '../../test-utils/mockdata/planets';
import { MemoryRouter } from 'react-router';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  const renderComponent = () => {
    render(
      <ErrorBoundary fallback={(reset) => <ErrorFallback resetError={reset} />}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ErrorBoundary>
    );
  };

  it('should make API fetches and displays data', async () => {
    mockGetDataOnce();

    renderComponent();

    await screen.findByRole('list');
    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(mockPlanets.length + 1);
    mockPlanets.forEach((result, idx) => {
      expect(cards[idx + 1]).toHaveTextContent(result.name as string);
    });
  });

  it('should handle network error', async () => {
    mockErrorNetworkOnce();

    renderComponent();

    await waitFor(() => {
      expect(screen.getByRole('paragraph')).toHaveTextContent('Network Error');
    });
  });

  it('should render error message', async () => {
    mockErrorNotFoundOnce();

    renderComponent();

    await waitFor(() => {
      expect(screen.getByRole('paragraph')).toHaveTextContent('Not Found');
    });
  });

  it('should render fetches data when click search button', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/search/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });

    await user.clear(input);
    await user.type(input, 'rth');

    mockGetSearchDataOnce((input as HTMLInputElement).value);
    await user.click(searchBtn);

    await waitFor(() => {
      expect(screen.getByText(/rth/i)).toBeInTheDocument();
      expect(screen.queryByText(/ars/i)).not.toBeInTheDocument();
    });
  });

  it('should save value in localStorage after clicking Search', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/search/i);
    const button = screen.getByRole('button', { name: /search/i });

    await user.clear(input);
    await user.type(input, 'test-localstore');
    await user.click(button);

    expect(localStorage.getItem('search-swapi')).toBe('test-localstore');
  });
});
