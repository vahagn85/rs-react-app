import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { useCountryStore } from '../../store/countryStore';

interface FormAutocompleteProps {
  id: string;
  name?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
}

function FormAutocomplete({
  id,
  name,
  register,
  error,
}: FormAutocompleteProps) {
  const countries = useCountryStore((state) => state.countries);
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
        {countries.map((opt) => (
          <option key={opt.code} value={opt.name} />
        ))}
      </datalist>
    </>
  );
}

export default FormAutocomplete;
