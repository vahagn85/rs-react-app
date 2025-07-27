import Button from './Button';
import Input from './Input';

interface HeaderProps {
  search: string;
  onSearch?: (search: string) => void;
  onClick?: () => void;
}

const Search = (props: HeaderProps) => {
  const { search, onSearch, onClick } = props;

  return (
    <section className="flex flex-wrap items-center justify-center p-4 gap-4 bg-white  rounded-lg shadow-md">
      <Input value={search} onSearch={onSearch} />
      <Button name="Search" onClick={onClick} />
    </section>
  );
};

export default Search;
