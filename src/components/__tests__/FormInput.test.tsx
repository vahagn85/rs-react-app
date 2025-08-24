import { render, screen } from '@testing-library/react';
import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import FormInput from '../FormFields/FormInput';

describe('FormInput component', () => {
  it('should render with default type text', () => {
    render(<FormInput id="name" name="name" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should add error styles when has error', () => {
    const error: FieldError = { type: 'required', message: 'Required' };
    render(<FormInput id="email" name="email" error={error} />);
    expect(screen.getByRole('textbox')).toHaveClass('!border-red-500');
  });

  it('should add register props when provided', () => {
    const register: UseFormRegisterReturn = {
      name: 'testName',
      onChange: vi.fn(),
      onBlur: vi.fn(),
      ref: vi.fn(),
    };

    render(<FormInput id="test" register={register} />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('name', 'testName');
  });
});
