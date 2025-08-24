import { render, screen } from '@testing-library/react';
import Modal from '../Modal';
import userEvent from '@testing-library/user-event';

describe('Modal component', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.append(modalRoot);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  const ModalTest = (props = {}) => {
    const onClose = vi.fn();
    render(
      <Modal isOpen title="Test Modal" onClose={onClose} {...props}>
        <input placeholder="Test input..." />
      </Modal>
    );
    return { onClose };
  };

  it('should not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} title="Modal" onClose={vi.fn()}>
        <p>Modal content</p>
      </Modal>
    );
    expect(screen.queryByText('Modal')).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    render(
      <Modal isOpen={true} title="Modal" onClose={vi.fn()}>
        <p>Modal content</p>
      </Modal>
    );
    expect(screen.getByText('Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('should focus on first input/select when opened', () => {
    ModalTest();
    expect(screen.getByPlaceholderText(/test input/i)).toHaveFocus();
  });

  it('should call onClose when close button clicked', async () => {
    const user = userEvent.setup();
    const { onClose } = ModalTest();

    await user.click(screen.getByRole('button', { name: /close/i }));
    expect(onClose).toHaveBeenCalled();
  });

  it('should call onClose when overlay clicked', async () => {
    const user = userEvent.setup();
    const { onClose } = ModalTest();

    await user.click(screen.getByTestId('overlay'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should call onClose when Escap', async () => {
    const user = userEvent.setup();
    const { onClose } = ModalTest();

    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalled();
  });

  it('should disabled submit button when isSubmitDisabled is true', () => {
    ModalTest({ isSubmitDisabled: true });
    expect(screen.getByRole('button', { name: /send/i })).toBeDisabled();
  });
});
