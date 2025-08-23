import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface FormAutocompleteProps {
  id: string;
  name?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  options: string[];
}

function FormAutocomplete({
  id,
  name,
  register,
  error,
  options,
}: FormAutocompleteProps) {
  return (
    <>
      <input
        id={id}
        list={`${id}-list`}
        placeholder="Choose country..."
        className={`form-control ${
          error ? '!border-red-500 !focus:ring-red-500' : ''
        }`}
        {...(register ?? { name })}
      />

      <datalist id={`${id}-list`}>
        {options.map((opt) => (
          <option key={opt} value={opt} />
        ))}
      </datalist>
    </>
  );
}

export default FormAutocomplete;
