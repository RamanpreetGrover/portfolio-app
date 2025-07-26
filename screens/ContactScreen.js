// ContactScreen.js – Screen to let users send you a message via their email app

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import * as MailComposer from 'expo-mail-composer'; // Expo API to open user's mail app

const ContactScreen = () => {
  // Store form input values using state hooks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle sending the message
  const handleSend = () => {
    // Validate that all fields are filled
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    // Use MailComposer to open the default mail app with pre-filled content
    MailComposer.composeAsync({
      recipients: ['ramanpreet.grover@outlook.com'], // 👈 Replace this with your real email
      subject: `Portfolio Contact from ${name}`,
      body: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })
      .then((result) => {
        // Handle the result (note: Android usually returns "undetermined")
        if (result.status === 'sent') {
          Alert.alert('Success', 'Email sent successfully!');
        } else {
          Alert.alert('Info', 'Email draft opened.');
        }
      })
      .catch((error) => {
        // Handle error if MailComposer fails
        Alert.alert('Error', 'Failed to open email composer.');
        console.error(error);
      });
  };

  return (
    // View shifts up when keyboard opens (especially on iOS)
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* ScrollView allows screen to scroll if content is tall or keyboard is open */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Contact Me</Text>

        {/* Name input field */}
        <TextInput
          placeholder="Your Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        {/* Email input field */}
        <TextInput
          placeholder="Your Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Message input field */}
        <TextInput
          placeholder="Your Message"
          style={[styles.input, styles.textArea]} // Combine input styles + textarea size
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />

        {/* Submit button */}
        <Button title="Send Message" onPress={handleSend} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Styles used for input fields, layout, and text
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allows ScrollView to expand vertically
    padding: 25,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100, // Taller input for message
  },
});

export default ContactScreen;
