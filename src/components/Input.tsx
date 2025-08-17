import { useTranslations } from 'next-intl';

interface InputProps {
  value: string;
  onSearch?: (search: string) => void;
}

const Input = (props: InputProps) => {
  const { value, onSearch } = props;
  const t = useTranslations('UI');
  return (
    <input
      type="text"
      placeholder={`${t('search')}...`}
      className="flex-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white dark:text-black"
      value={value}
      onChange={(e) => onSearch?.(e.target.value)}
    />
  );
};

export default Input;
