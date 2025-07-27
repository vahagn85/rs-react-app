import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../Search';

describe('Search Component', () => {
  it('should render an input and a button', () => {
    render(<Search search="Test" />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    expect(input).toHaveValue('Test');
    expect(button).toHaveTextContent('Search');
  });

  it('should call onClick when clicking the button', async () => {
    const handleClick = vi.fn();
    render(<Search search="" onClick={handleClick} />);

    const button = screen.getByRole('button');

    const user = userEvent.setup();
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call onSearch when user types', async () => {
    const handleSearch = vi.fn();
    render(<Search search="" onSearch={handleSearch} />);

    const input = screen.getByRole('textbox');

    const user = userEvent.setup();
    await user.type(input, 'header test');

    expect(handleSearch).toHaveBeenCalledTimes(11);
    expect(handleSearch).toHaveBeenCalledWith('h');
    expect(handleSearch).toHaveBeenLastCalledWith('t');
  });
});
