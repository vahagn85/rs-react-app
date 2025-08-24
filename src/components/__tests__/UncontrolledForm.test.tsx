import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UncontrolledForm from '../UncontrolledForm';
import { formFields } from '../../utils/formFields';

describe('UncontrolledForm component', () => {
  const onSuccess = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const componentTest = () => {
    render(<UncontrolledForm onSuccess={onSuccess} />);
  };

  it('should render all fields from formFields', () => {
    componentTest();

    formFields.forEach((field) => {
      expect(screen.getByLabelText(field.label)).toBeInTheDocument();
    });
  });

  it('should accept and store a file upload', async () => {
    const file = new File(['avatar'], 'avatar.png', { type: 'image/png' });
    render(<UncontrolledForm onSuccess={onSuccess} />);

    const input = screen.getByLabelText(/picture/i) as HTMLInputElement;
    await userEvent.upload(input, file);

    expect(input.files).toHaveLength(1);
    expect(input.files?.[0]).toStrictEqual(file);
  });

  it('should show validation error when image is invalid', async () => {
    const { container } = render(<UncontrolledForm onSuccess={onSuccess} />);

    await userEvent.type(
      screen.getByRole('textbox', { name: /name/i }),
      'TestUser'
    );

    const file = new File(['avatar'], 'avatar.txt', { type: 'image/txt' });
    const input = screen.getByLabelText(/picture/i) as HTMLInputElement;

    await userEvent.upload(input, file);

    const form = container.querySelector('#modal-form') as HTMLFormElement;

    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.queryByText(/incorrect file format/i)).toBeInTheDocument();
    });
  });
});
