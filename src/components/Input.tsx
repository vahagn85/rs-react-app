interface InputProps {
  value: string;
  onSearch?: (search: string) => void;
}

const Input = (props: InputProps) => {
  const { value, onSearch } = props;

  return (
    <input
      type="text"
      placeholder="Search..."
      className="flex-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) => onSearch?.(e.target.value)}
    />
  );
};

export default Input;
