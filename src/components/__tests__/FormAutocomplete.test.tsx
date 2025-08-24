import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import FormAutocomplete from '../FormFields/FormAutocomplete';

vi.mock('../../store/countryStore', () => ({
  useCountryStore: (
    selector: (state: {
      countries: { code: string; name: string }[];
    }) => unknown
  ) =>
    selector({
      countries: [
        { code: 'AM', name: 'Armenia' },
        { code: 'FR', name: 'France' },
      ],
    }),
}));

describe('FormAutocomplete component', () => {
  it('should render input and datalist', () => {
    render(<FormAutocomplete id="country" name="country" />);
    const input = screen.getByPlaceholderText('Choose country...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('list', 'country-list');
    expect(screen.getByRole('listbox', { hidden: true })).toHaveAttribute(
      'id',
      'country-list'
    );
  });

  it('should render datalist with countries from store', () => {
    render(<FormAutocomplete id="country" name="country" />);
    const datalist = screen.getByRole('listbox', { hidden: true });
    expect(datalist).toHaveAttribute('id', 'country-list');

    expect(screen.getByDisplayValue('')).toBeInTheDocument();

    expect(
      datalist?.querySelector('option[value="Armenia"]')
    ).toBeInTheDocument();
    expect(
      datalist?.querySelector('option[value="France"]')
    ).toBeInTheDocument();
  });

  it('should add error styles when has error', () => {
    const error: FieldError = { type: 'required', message: 'Required' };
    render(<FormAutocomplete id="country" name="country" error={error} />);
    expect(screen.getByPlaceholderText('Choose country...')).toHaveClass(
      '!border-red-500'
    );
  });

  it('should add register props when provided', async () => {
    const onChange = vi.fn();
    const register: UseFormRegisterReturn = {
      name: 'testCountry',
      onChange,
      onBlur: vi.fn(),
      ref: vi.fn(),
    };

    render(<FormAutocomplete id="country" register={register} />);
    const input = screen.getByPlaceholderText('Choose country...');
    expect(input).toHaveAttribute('name', 'testCountry');

    await userEvent.type(input, 'Armenia');
    expect(onChange).toHaveBeenCalled();
  });
});
