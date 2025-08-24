import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import FormSelect from '../FormFields/FormSelect';

describe('FormSelect component', () => {
  const options = [
    { value: 'am', label: 'Armenia' },
    { value: 'fr', label: 'France' },
  ];

  it('should render with options', () => {
    render(<FormSelect id="country" options={options} name="country" />);

    for (const option of options) {
      expect(
        screen.getByRole('option', { name: option.label })
      ).toBeInTheDocument();
    }
  });

  it('should add error styles when has error', () => {
    const error: FieldError = { type: 'required', message: 'Required' };
    render(
      <FormSelect id="country" options={options} name="country" error={error} />
    );
    expect(screen.getByRole('combobox')).toHaveClass('!border-red-500');
  });

  it('should add register props when provided', async () => {
    const onChange = vi.fn();
    const register: UseFormRegisterReturn = {
      name: 'testCountry',
      onChange,
      onBlur: vi.fn(),
      ref: vi.fn(),
    };

    render(<FormSelect id="country" options={options} register={register} />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('name', 'testCountry');

    await userEvent.selectOptions(select, 'am');
    expect(onChange).toHaveBeenCalled();
  });
});
