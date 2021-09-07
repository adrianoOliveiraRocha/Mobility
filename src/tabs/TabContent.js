import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 
import TopTab from './TopTab';
import About from '../screens/About';
import Settings from '../screens/Settings';
import colors from './../../styles/colors';

const Tab = createBottomTabNavigator();

export default function TabComponent() {  
  
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Sobre') {
              iconName = focused ? 'info' : 'info';
            } else if (route.name === 'Configurações') {
              iconName = focused ? 'cog' : 'cog';
            }

            return <Entypo name={iconName} size={size} color={color} />
            
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.color1,
          inactiveTintColor: colors.color2,
        }}
      >
        <Tab.Screen name="Home" component={TopTab} />
        <Tab.Screen name="Configurações" component={Settings} />
        <Tab.Screen name="Sobre" component={About} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
