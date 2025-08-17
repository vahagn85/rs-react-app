'use client';
import { useState, type ReactNode } from 'react';
import type { Theme } from '../types/theme.types';
import { ThemeContext } from './ThemeContext';

interface ThemeContextProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  return (
    <ThemeContext value={{ theme: currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext>
  );
}
