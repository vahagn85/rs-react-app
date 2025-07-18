import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorFallback from '../ErrorFallback';

describe('ErrorFallback Component', () => {
  it('should render error message and a button', () => {
    const fn = vi.fn();
    render(<ErrorFallback resetError={fn} />);

    const heading = screen.getByRole('heading');
    const button = screen.getByRole('button');

    expect(heading).toHaveTextContent('Something went wrong.');
    expect(button).toHaveTextContent('Try Again');
  });

  it('should call resetError when clicking the button', async () => {
    const resetError = vi.fn();
    render(<ErrorFallback resetError={resetError} />);

    const button = screen.getByRole('button');

    const user = userEvent.setup();
    await user.click(button);

    expect(resetError).toHaveBeenCalledTimes(1);
  });
});
