import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext'; //  Import theme context

const AboutScreen = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      {/* Title with dynamic text color */}
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
        Ramanpreet Grover
      </Text>

      <Text style={[styles.text, { color: isDark ? '#ccc' : '#333' }]}>
        Welcome to my portfolio app!
      </Text>

      {/* Theme Toggle Button */}
      <Button
        title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
        onPress={toggleTheme}
      />

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Go to Gallery" onPress={() => navigation.navigate('Gallery')} />
        <Button title="Contact Me" onPress={() => navigation.navigate('Contact')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    gap: 15,
  },
});

export default AboutScreen;
