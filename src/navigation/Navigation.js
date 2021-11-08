import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Главная' }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'О приложении' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
