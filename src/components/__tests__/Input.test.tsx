import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';

describe('Input Component', () => {
  it('should render an input with placeholder', () => {
    const fn = vi.fn();
    render(<Input value="" onSearch={fn} />);

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Search...'
    );
  });

  it('should render with the correct value', () => {
    render(<Input value="test value" />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('test value');
  });

  it('should call onSearch when user types', async () => {
    const handleSearch = vi.fn();
    render(<Input value="" onSearch={handleSearch} />);

    const input = screen.getByRole('textbox');

    const user = userEvent.setup();
    await user.type(input, 'Test Input');

    expect(handleSearch).toHaveBeenCalledTimes(10);
    expect(handleSearch).toHaveBeenCalledWith('T');
    expect(handleSearch).toHaveBeenLastCalledWith('t');
  });
});
