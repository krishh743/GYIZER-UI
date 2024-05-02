import React, { createContext, useContext, useState } from 'react';

// Create a context
type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
  };
  
  // Create a context with default values
  const defaultThemeContext: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => {}
  };
  const ThemeContext = createContext(defaultThemeContext);
  
// Create a provider component
const ThemeProvider = ({ children }:any) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Component that uses the theme context
const ThemedButton = () => {
  const { theme, toggleTheme }:any = useTheme();
  return (
    <button onClick={toggleTheme} style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      Toggle Theme
    </button>
  );
};

// Component tree
const TheameDark = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Toggler</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
};

export default TheameDark;
