import { render, screen } from '@testing-library/react';
import Detail from '../Detail';
import type { Result } from '../../types/result.types';
import { createQueryWrapper } from '../../test-utils/createQueryWrapper';
import type { ReactElement } from 'react';

vi.mock('../../hooks/useQueryPlanet', () => ({
  useQueryPlanet: vi.fn(),
}));
vi.mock('../DetailCard', () => ({
  default: ({ data }: { data: Result }) => (
    <div>Mocked DetailCard for {data?.name}</div>
  ),
}));
import { useQueryPlanet } from '../../hooks/useQueryPlanet';
import { MemoryRouter } from 'react-router';

describe('Detail Component', () => {
  const wrapper = createQueryWrapper();
  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderWithProviders = (ui: ReactElement) =>
    render(<MemoryRouter>{ui}</MemoryRouter>, { wrapper });

  it('should render loading spinner when loading state true', () => {
    (useQueryPlanet as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isPending: true,
      error: null,
      data: null,
    });

    const { container } = renderWithProviders(<Detail />);
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should render error when error state', () => {
    (useQueryPlanet as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isPending: false,
      isError: true,
      error: { message: 'Something went wrong' },
      data: null,
    });

    renderWithProviders(<Detail />);
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('should render "No found" for null data', () => {
    (useQueryPlanet as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isPending: false,
      error: null,
      data: null,
    });

    renderWithProviders(<Detail />);
    expect(screen.getByText(/no found/i)).toBeInTheDocument();
  });

  it('should render DetailCard with data', () => {
    (useQueryPlanet as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      isPending: false,
      error: null,
      data: { name: 'Test' },
    });

    renderWithProviders(<Detail />);
    expect(screen.getByText(/mocked detailcard for test/i)).toBeInTheDocument();
  });
});
