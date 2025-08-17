import { useEffect, useState } from 'react';

export const useSearchFromLS = (key: string, initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const savedValue =
      typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    if (savedValue !== null) setValue(savedValue);
  }, [key]);

  const clearSearch = () => {
    localStorage.removeItem(key);
    setValue('');
  };

  const updateSearch = (newValue: string) => {
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, newValue);
    }
  };

  return {
    value,
    clearSearch,
    updateSearch,
  };
};
