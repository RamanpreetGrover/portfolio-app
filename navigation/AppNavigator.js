// AppNavigator.js – Sets up stack navigation between screens

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Navigation container for managing screen stack
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Native-style stack navigator

// Import screen components
import AboutScreen from '../screens/AboutScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator(); // Create stack navigator object

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About">
        {/* Each screen in the stack with its name and component */}
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
