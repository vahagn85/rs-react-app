import type { FieldError } from 'react-hook-form';
import type { ReactNode } from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  error?: FieldError;
  isRow?: boolean;
  children: ReactNode;
}

function FormField({
  id,
  label,
  error,
  isRow = false,
  children,
}: FormFieldProps) {
  return (
    <div className={`relative flex gap-1 mb-6 ${isRow ? '' : 'flex-col'}`}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>

      {children}

      {error && (
        <p className="absolute top-full text-red-500 text-xs">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default FormField;
