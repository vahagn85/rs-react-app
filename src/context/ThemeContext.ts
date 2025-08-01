import { createContext } from 'react';
import type { ThemeContextType } from '../types/theme.types';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});
