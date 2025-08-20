import type { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  form?: string;
  rest?: Record<string, unknown>;
}
function Button({
  onClick,
  type,
  className = '',
  disabled = false,
  form,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none rounded transition duration-200 cursor-pointer ' +
        className
      }
      onClick={onClick}
      type={type}
      disabled={disabled}
      form={form}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
