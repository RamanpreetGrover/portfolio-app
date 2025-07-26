import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider } from './context/ThemeContext'; // ✅ Import the context provider

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
