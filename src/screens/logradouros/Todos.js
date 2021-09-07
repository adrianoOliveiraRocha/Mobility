import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from './../../../styles/styles';

export default function Todos({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.textContent}>
          All Lines Here
        </Text>

        <Button 
          title="Select A Patio"
          onPress={() => navigation.navigate("patio")}
        />
      </View>
      
      <View style={styles.banner}>
        <Text>Banner</Text>
      </View>  

    </View>
  )
}
