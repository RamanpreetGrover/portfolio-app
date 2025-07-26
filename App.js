// App.js – Root component that loads the navigation system

import React from 'react'; // Required to use JSX
import AppNavigator from './navigation/AppNavigator'; // Custom navigation component

export default function App() {
  // Render the app wrapped with navigation container
  return <AppNavigator />;
}
