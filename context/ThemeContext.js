// ThemeContext.js – Global theme context for dark/light mode toggle

import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native'; // Detect system theme

// Create the ThemeContext object
const ThemeContext = createContext();

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme(); // Detect current system theme
  const [theme, setTheme] = useState(systemScheme || 'light'); // Default to system or light

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Expose the theme and toggle function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme values
export const useTheme = () => useContext(ThemeContext);
