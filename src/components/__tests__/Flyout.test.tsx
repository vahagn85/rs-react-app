import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Flyout from '../Flyout';

vi.mock('../../store/appStore', () => ({
  useAppStore: vi.fn(),
}));
import { useAppStore } from '../../store/appStore';

describe('Flyout component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render nothing if no selected items', () => {
    (useAppStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      selected: [],
      cleanItems: vi.fn(),
    });

    const { container } = render(<Flyout />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render text for 2 selected item', () => {
    (useAppStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      selected: [{ id: 1 }, { id: 2 }],
      cleanItems: vi.fn(),
    });

    render(<Flyout />);
    expect(screen.getByText(/2 items are selected/i)).toBeInTheDocument();
  });

  it('should render a 2 buttons', () => {
    (useAppStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      selected: [{ id: 1 }, { id: 2 }],
      cleanItems: vi.fn(),
    });

    render(<Flyout />);
    expect(
      screen.getByRole('button', { name: 'Unselect all' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Download' })
    ).toBeInTheDocument();
  });

  it('should call cleanItems when click in "Unselect all" button', async () => {
    const cleanItemsMock = vi.fn();
    (useAppStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      selected: [{ id: 1 }],
      cleanItems: cleanItemsMock,
    });

    const user = userEvent.setup();
    render(<Flyout />);

    await user.click(screen.getByRole('button', { name: /unselect all/i }));

    expect(cleanItemsMock).toHaveBeenCalled();
  });
});
