import { useEffect, useState, type ReactNode } from 'react';
import type { Theme } from '../types/theme.types';
import { ThemeContext } from './ThemeContext';

interface ThemeContextProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  useEffect(() => {
    const elem = document.documentElement;
    if (currentTheme === 'dark') {
      elem.classList.add('dark');
    } else {
      elem.classList.remove('dark');
    }
  }, [currentTheme]);

  return (
    <ThemeContext value={{ theme: currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext>
  );
}
