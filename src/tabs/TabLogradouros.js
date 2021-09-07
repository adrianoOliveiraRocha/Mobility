import * as React from 'react';
// import { View, Button, Text, Animated } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todos from '../screens/logradouros/Todos';
import Logradouro from '../screens/logradouros/Logradouro';
import colors from '../../styles/colors';

const Stack = createStackNavigator();

function MyStack() {
  return (
    
    <Stack.Navigator>

      <Stack.Screen
        name="allPatios"
        component={Todos}
        options={{
          title: 'Todos os logradouros',
          headerTintColor: "white",
          headerStyle: {backgroundColor: colors.color4},          
        }}
      />

      <Stack.Screen 
        name="patio"
        component={Logradouro}
        options={{
          title: 'Voltar',
          headerTintColor: "white",
          headerStyle: {backgroundColor: colors.color4},          
        }}
      />

    </Stack.Navigator>
  );
}

export default function TabLogradouros() {
  // If you want push a navigator inside of another, do not pass other NavigationContainer 
  return (
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>
    <MyStack />
  );
}