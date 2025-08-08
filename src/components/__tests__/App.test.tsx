import {
  mockErrorNetworkOnce,
  mockErrorNotFoundOnce,
} from '../../test-utils/mockApi';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import ErrorBoundary from '../ErrorBoundary';
import ErrorFallback from '../ErrorFallback';
import { mockPlanets } from '../../test-utils/mockdata/planets';
import { MemoryRouter } from 'react-router';
import { createQueryWrapper } from '../../test-utils/createQueryWrapper';

vi.mock('../../hooks/useQueryPlanets', () => ({
  useQueryPlanets: vi.fn(),
}));
import { useQueryPlanets } from '../../hooks/useQueryPlanets';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  const Wrapper = createQueryWrapper();
  const renderComponent = () => {
    render(
      <Wrapper>
        <ErrorBoundary
          fallback={(reset) => <ErrorFallback resetError={reset} />}
        >
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </ErrorBoundary>
      </Wrapper>
    );
  };

  it('should make API fetches and displays data', async () => {
    (useQueryPlanets as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isPending: false,
      isError: false,
      data: { results: mockPlanets },
    });

    renderComponent();

    await screen.findByRole('list');
    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(mockPlanets.length + 1);
    mockPlanets.forEach((result, idx) => {
      expect(cards[idx + 1]).toHaveTextContent(result.name as string);
    });
  });

  it('should handle network error', async () => {
    (useQueryPlanets as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isPending: false,
      isError: true,
      error: { message: 'Network Error' },
      data: null,
    });
    mockErrorNetworkOnce();

    renderComponent();

    await waitFor(() => {
      expect(screen.getByRole('paragraph')).toHaveTextContent('Network Error');
    });
  });

  it('should render error message', async () => {
    (useQueryPlanets as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isPending: false,
      isError: false,
      data: null,
    });
    mockErrorNotFoundOnce();

    renderComponent();

    await waitFor(() => {
      expect(screen.getByRole('paragraph')).toHaveTextContent(
        'No results found'
      );
    });
  });

  it('should render fetches data when click search button', async () => {
    (useQueryPlanets as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isPending: false,
      isError: false,
      data: { results: mockPlanets },
    });
    const user = userEvent.setup();
    render(
      <Wrapper>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Wrapper>
    );

    const input = screen.getByPlaceholderText(/search/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });

    await user.clear(input);
    await user.type(input, 'rth');

    (useQueryPlanets as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isPending: false,
      isError: false,
      data: { results: mockPlanets.filter((p) => p.name.includes('rth')) },
    });
    await user.click(searchBtn);

    await waitFor(() => {
      expect(screen.getByText(/rth/i)).toBeInTheDocument();
      expect(screen.queryByText(/ars/i)).not.toBeInTheDocument();
    });
  });

  it('should save value in localStorage after clicking Search', async () => {
    const user = userEvent.setup();

    render(
      <Wrapper>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Wrapper>
    );

    const input = screen.getByPlaceholderText(/search/i);
    const button = screen.getByRole('button', { name: /search/i });

    await user.clear(input);
    await user.type(input, 'test-localstore');
    await user.click(button);

    expect(localStorage.getItem('search-swapi')).toBe('test-localstore');
  });
});
