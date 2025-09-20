import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultTheme = {
  mode: 'dark',
  accent: '#2962ff',
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const THEME_STORAGE_KEY = 'streamnow_theme';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) setTheme(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
    document.body.setAttribute('data-theme', theme.mode);
    document.body.style.setProperty('--accent', theme.accent);
    document.body.style.background = theme.mode === 'light' ? '#f5f7fa' : '#121212';
  }, [theme]);

  const updateTheme = (updates) => setTheme(prev => ({ ...prev, ...updates }));

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};