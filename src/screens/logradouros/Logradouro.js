import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from './../../../styles/styles';

export default function Todas({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.textContent}>
          Show a especific patio
        </Text>

        <Button 
          title="Show all lines"
          onPress={() => navigation.navigate("allPatios")}
        />
      </View>
      
      <View style={styles.banner}>
        <Text>Banner</Text>
      </View>  

    </View>
  )
}
