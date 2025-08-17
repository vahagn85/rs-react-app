'use client';

import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useSearchStore } from '../store/searchStore';
import { useTranslations } from 'next-intl';

const Search = () => {
  const t = useTranslations('UI');
  const { search, setSearch } = useSearchStore();

  const [searchValue, setSearchValue] = useState(search);

  const handleSearch = (value: string) => setSearchValue(value);

  const handleClick = () => {
    setSearch(searchValue);
  };

  return (
    <section className="flex flex-wrap items-center justify-center p-4 gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-500">
      <Input value={searchValue} onSearch={handleSearch} />
      <Button name={t('search')} onClick={handleClick} />
    </section>
  );
};

export default Search;
