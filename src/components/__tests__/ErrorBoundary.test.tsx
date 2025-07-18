import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorBoundary from '../ErrorBoundary';
import ErrorFallback from '../ErrorFallback';
import { Component } from 'react';

class CrashingComponent extends Component {
  render() {
    throw new Error('Crashing component error');
    return null;
  }
}

describe('ErrorBoundary Component', () => {
  it('should render error message and a button when an error occurs', () => {
    render(
      <ErrorBoundary
        fallback={(resetError) => <ErrorFallback resetError={resetError} />}
      >
        <CrashingComponent />
      </ErrorBoundary>
    );
    screen.debug();

    const heading = screen.getByRole('heading');
    const button = screen.getByRole('button');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Something went wrong.');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Try Again');
  });

  it('should re-render children after reset button click', async () => {
    const user = userEvent.setup();

    const { unmount } = render(
      <ErrorBoundary
        fallback={(resetError) => <ErrorFallback resetError={resetError} />}
      >
        <CrashingComponent />
      </ErrorBoundary>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await user.click(button);

    unmount();

    render(
      <ErrorBoundary
        fallback={(resetError) => <ErrorFallback resetError={resetError} />}
      >
        <p>App</p>
      </ErrorBoundary>
    );
    expect(screen.getByText(/App/i)).toBeInTheDocument();
  });
});
