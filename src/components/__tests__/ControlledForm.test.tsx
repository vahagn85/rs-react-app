import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ControlledForm from '../ControlledForm';
import { formFields } from '../../utils/formFields';

describe('ControlledForm component', () => {
  const onSuccess = vi.fn();
  const onValidChange = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const componentTest = () => {
    render(
      <ControlledForm onSuccess={onSuccess} onValidChange={onValidChange} />
    );
  };

  it('should render all fields from formFields', () => {
    componentTest();

    formFields.forEach((field) => {
      expect(screen.getByLabelText(field.label)).toBeInTheDocument();
    });
  });

  it('should call onValidChange with false initially', async () => {
    componentTest();
    expect(onValidChange).toHaveBeenCalledWith(false);
  });

  it('should show validation errors when name is invalid', async () => {
    const { container } = render(
      <ControlledForm onSuccess={onSuccess} onValidChange={onValidChange} />
    );
    const form = container.querySelector('#modal-form') as HTMLFormElement;
    await userEvent.type(
      screen.getByRole('textbox', { name: /name/i }),
      'test'
    );
    fireEvent.submit(form);

    await waitFor(() => {
      screen.findByText(/name must start with an uppercase letter/i);
    });
  });

  it('should accept and store a file upload', async () => {
    const file = new File(['avatar'], 'avatar.png', { type: 'image/png' });
    render(
      <ControlledForm onSuccess={onSuccess} onValidChange={onValidChange} />
    );

    const input = screen.getByLabelText(/picture/i) as HTMLInputElement;
    await userEvent.upload(input, file);

    expect(input.files).toHaveLength(1);
    expect(input.files?.[0]).toStrictEqual(file);
  });

  it('should submit valid form and call onSuccess', async () => {
    const { container } = render(
      <ControlledForm onSuccess={onSuccess} onValidChange={onValidChange} />
    );

    await userEvent.type(
      screen.getByRole('textbox', { name: /name/i }),
      'TestUser'
    );

    await userEvent.type(
      screen.getByRole('spinbutton', { name: /age/i }),
      '25'
    );

    await userEvent.type(
      screen.getByRole('textbox', { name: /email/i }),
      'test@example.com'
    );

    await userEvent.selectOptions(
      screen.getByRole('combobox', { name: /gender/i }),
      'male'
    );

    const file = new File(['avatar'], 'avatar.png', { type: 'image/png' });
    const fileInput = screen.getByLabelText(/picture/i);
    await userEvent.upload(fileInput, file);

    await userEvent.type(
      screen.getByPlaceholderText(/choose country/i),
      'Armenia'
    );

    await userEvent.type(screen.getByLabelText(/^password$/i), 'Password123!');
    const confirmPassword = screen.getByLabelText(/confirm password/i);
    await userEvent.type(confirmPassword, 'Password123!');

    await userEvent.click(screen.getByRole('checkbox', { name: /terms/i }));

    const form = container.querySelector('#modal-form') as HTMLFormElement;

    fireEvent.submit(form);

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});
