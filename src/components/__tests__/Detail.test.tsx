import { render, screen } from '@testing-library/react';
import Detail from '../Detail';
import type { Result } from '../../types/result.types';

vi.mock('../../hooks/useData', () => ({
  useData: vi.fn(),
}));
vi.mock('../DetailCard', () => ({
  default: ({ data }: { data: Result }) => (
    <div>Mocked DetailCard for {data?.name}</div>
  ),
}));
import { useData } from '../../hooks/useData';
import { MemoryRouter } from 'react-router';

describe('Detail Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render loading spinner when loading state true', () => {
    (useData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      loading: true,
      error: null,
      data: null,
    });

    const { container } = render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>
    );
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should render error when error state', () => {
    (useData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      loading: false,
      error: 'Something went wrong',
      data: null,
    });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>
    );
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('should render "No found" for null data', () => {
    (useData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      loading: false,
      error: null,
      data: null,
    });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>
    );
    expect(screen.getByText(/no found/i)).toBeInTheDocument();
  });

  it('should render DetailCard with data', () => {
    (useData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      loading: false,
      error: null,
      data: { name: 'Test' },
    });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>
    );
    expect(screen.getByText(/mocked detailcard for test/i)).toBeInTheDocument();
  });
});
