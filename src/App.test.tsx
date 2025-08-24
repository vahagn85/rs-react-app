import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

vi.mock('./store/formStore', () => ({
  useFormStore: () => ({
    dataRHF: null,
    dataUncontrolled: null,
    updated: false,
    clearUpdated: vi.fn(),
  }),
}));

describe('App', () => {
  beforeAll(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  it('should open uncontrolledForm modal when click the button', async () => {
    render(<App />);
    const user = userEvent.setup();

    const btn = screen.getByRole('button', { name: /form - uncontrolled/i });
    await user.click(btn);

    const overlay = await screen.findByTestId('overlay');
    expect(overlay).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('should open controlled form modal when click the button', async () => {
    render(<App />);
    const user = userEvent.setup();

    const btn = screen.getByRole('button', { name: /form - react hook form/i });
    await user.click(btn);

    const overlay = await screen.findByTestId('overlay');
    expect(overlay).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
  });

  it('should close modal when clicking the close button', async () => {
    render(<App />);
    const user = userEvent.setup();

    const btn = screen.getByRole('button', { name: /form - uncontrolled/i });
    await user.click(btn);

    const closeBtn = screen.getByRole('button', { name: /close/i });
    await user.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
    });
  });
});
