import { render, screen } from '@testing-library/react';
import type { FieldError } from 'react-hook-form';
import FormField from '../FormFields/FormField';

describe('FormField component', () => {
  it('should render the label with correct htmlFor', () => {
    render(
      <FormField id="name" label="Name">
        <input id="name" />
      </FormField>
    );

    const label = screen.getByText('Name');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'name');
  });

  it('should render error message when has prop error', () => {
    const error: FieldError = {
      type: 'required',
      message: 'Name is required',
    };

    render(
      <FormField id="name" label="Name" error={error}>
        <input type="text" id="name" />
      </FormField>
    );

    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });
});
