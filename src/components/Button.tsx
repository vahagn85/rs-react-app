interface ButtonProps {
  name: string;
  variant?: 'primary' | 'danger';
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { name, variant = 'primary', onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`text-white px-4 py-2 border border-gray-300 rounded-lg shadow-sm ${variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600 mt-3'} cursor-pointer focus:outline-none`}
    >
      {name}
    </button>
  );
};

export default Button;
