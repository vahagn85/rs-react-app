import Button from './Button';
import Input from './Input';

interface HeaderProps {
  search: string;
  onSearch?: (search: string) => void;
  onClick?: () => void;
}

const Header = (props: HeaderProps) => {
  const { search, onSearch, onClick } = props;

  return (
    <section className="w-full max-w-xl flex flex-wrap items-center justify-center p-4 gap-4 bg-white  rounded-lg shadow-md">
      <Input value={search} onSearch={onSearch} />
      <Button name="Search" onClick={onClick} />
    </section>
  );
};

export default Header;
