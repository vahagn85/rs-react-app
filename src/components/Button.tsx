interface ButtonProps {
  name: string;
  variant?: 'primary' | 'danger';
  onClick?: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { name, variant = 'primary', onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={`text-white px-4 py-2 border border-gray-300 rounded-lg shadow-sm ${variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'} cursor-pointer focus:outline-none ${className || ''}`}
    >
      {name}
    </button>
  );
};

export default Button;
