import React from 'react';
import { View, Text } from 'react-native';
import styles from './../../styles/styles';

export default function About() {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.textContent}>
          About
        </Text>        
      </View>
      
      <View style={styles.banner}>
        <Text>Banner</Text>
      </View>  

    </View>
  );
}