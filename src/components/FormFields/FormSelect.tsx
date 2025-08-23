import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface FormSelectProps {
  id: string;
  name?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  options: { value: string; label: string }[];
}

function FormSelect({ id, register, name, error, options }: FormSelectProps) {
  return (
    <select
      id={id}
      {...(register ?? { name })}
      className={`form-control ${
        error ? '!border-red-500 !focus:ring-red-500' : ''
      }`}
    >
      <option value="">Select an option</option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default FormSelect;
