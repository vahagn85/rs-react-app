import { useState } from 'react';

export const useSearchFromLS = (key: string, initialValue = '') => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? savedValue : initialValue;
  });

  const clearSearch = () => {
    localStorage.removeItem(key);
    setValue('');
  };

  const updateSearch = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return {
    value,
    clearSearch,
    updateSearch,
  };
};
