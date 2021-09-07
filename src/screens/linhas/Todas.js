import React from 'react'
import { View, Text, Button } from 'react-native';
import styles from './../../../styles/styles';

export default function Todas({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.textContent}>
          All Lines Here
        </Text>

        <Button 
          title="Select A Line"
          onPress={() => navigation.navigate("line")}
        />
      </View>
      
      <View style={styles.banner}>
        <Text>Banner</Text>
      </View>  

    </View>
  )
}
