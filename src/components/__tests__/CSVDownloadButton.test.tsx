import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CSVDownloadButton from '../CSVDownloadButton';

vi.mock('../../utils/filesUtiles', () => ({
  generateCSV: vi.fn(() => 'mocked-csv-content'),
}));

global.URL.createObjectURL = vi.fn(() => 'blob:mock-url');
global.URL.revokeObjectURL = vi.fn();

describe('CSVDownloadButton Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('should render a button', () => {
    render(<CSVDownloadButton selectedItems={[]} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Download');
  });

  it('should trigger download on click', async () => {
    const user = userEvent.setup();

    render(
      <CSVDownloadButton selectedItems={[{ id: 1 }]} fileName="test.csv" />
    );
    const button = screen.getByRole('button');
    const link = screen.getByTestId('download-link') as HTMLAnchorElement;

    link.click = vi.fn();
    await user.click(button);

    expect(link.click).toHaveBeenCalled();
    expect(link.href).toContain('blob:mock-url');
    expect(link.download).toBe('test.csv');
  });
});
