// GalleryScreen.js – Using reanimated carousel for better Expo support

import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

// Local images
const projects = [
  {
    title: 'Project One',
    image: require('../assets/project1.jpeg'),
  },
  {
    title: 'Project Two',
    image: require('../assets/project2.jpg'),
  },
  {
    title: 'Project Three',
    image: require('../assets/project3.jpg'),
  },
];

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Projects</Text>
      <Carousel
        loop
        width={screenWidth}
        height={250}
        autoPlay={true}
        data={projects}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: screenWidth * 0.8,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default GalleryScreen;
