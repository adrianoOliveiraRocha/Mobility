import React from 'react'
import { View, Text, Button } from 'react-native';
import styles from './../../../styles/styles';

export default function Todas({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.textContent}>
          Show a especific line
        </Text>

        <Button 
          title="Show all lines"
          onPress={() => navigation.navigate("allLines")}
        />
      </View>
      
      <View style={styles.banner}>
        <Text>Banner</Text>
      </View>  

    </View>
  )
}
