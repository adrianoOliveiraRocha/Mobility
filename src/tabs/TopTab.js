// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { NavigationContainer } from '@react-navigation/native';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TabLinhas from './TabLinhas';
import TabLogradouros from './TabLogradouros';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const colors = require('./../../styles/colors');

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: colors.default.color7,
        inactiveTintColor: '#cccccc',
        style: {
          backgroundColor: colors.default.color8,
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: colors.default.color4,
          borderBottomWidth: 2,
        },
      }}>
      
      <Tab.Screen
        name="Linhas"
        component={TabLinhas}
        options={{
          tabBarLabel: 'Linhas',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}  />

      <Tab.Screen
        name="Patios"
        component={TabLogradouros}
        options={{
          tabBarLabel: 'Logradouros',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }} />
    </Tab.Navigator>
  );
}

function TopTab() {
  return (
    
    <Stack.Navigator
      initialRouteName="TabLinhas"
      screenOptions={{
        headerStyle: { backgroundColor: colors.default.color8 }, // header
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Meu Ônibus' }}/>
    </Stack.Navigator>
    
  );
}

export default TopTab;