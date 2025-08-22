import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface FormInputProps {
  id: string;
  type?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  name?: string;
}

function FormInput({
  id,
  type = 'text',
  register,
  error,
  name,
}: FormInputProps) {
  return (
    <input
      id={id}
      type={type}
      className={`form-control ${
        error ? 'border-red-500 focus:ring-red-500' : ''
      }`}
      {...(register ?? { name })}
    />
  );
}

export default FormInput;
