import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'; // Import Button component
import { useNavigation } from '@react-navigation/native'; // Hook to navigate

const AboutScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ramanpreet Grover</Text>
      <Text style={styles.text}>Welcome to my portfolio app!</Text>
      <Text style={styles.text}>I'm a developer passionate about React Native.</Text>

      {/* Navigation buttons */}
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    gap: 15,
  },
});

export default AboutScreen;
