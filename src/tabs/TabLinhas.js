import * as React from 'react';
// import { View, Button, Text, Animated } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todas from '../screens/linhas/Todas';
import Linha from '../screens/linhas/Linha';
import colors from '../../styles/colors';

const Stack = createStackNavigator();

function MyStack() {
  return (
    
    <Stack.Navigator>

      <Stack.Screen
        name="allLines"
        component={Todas}
        options={{
          title: 'Todas as Linhas',
          headerTintColor: "white",
          headerStyle: {backgroundColor: colors.color4},          
        }}
      />

      <Stack.Screen 
        name="line"
        component={Linha}
        options={{
          title: 'Voltar',
          headerTintColor: "white",
          headerStyle: {backgroundColor: colors.color4},          
        }}
      />

    </Stack.Navigator>
  );
}

export default function TabLinhas() {
  // If you want push a navigator inside of another, do not pass other NavigationContainer 
  return (
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>
    <MyStack />
  );
}