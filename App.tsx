import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SettingsScreen from './src/screens/setting';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login';
import Index from './src/screens/index';
import List from './src/screens/list';
import Setting from './src/screens/setting'
import EmptyScreen from './src/screens/emptyScreen';
import Home from './src/screens/home'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Home" component={EmptyScreen} />
        <Stack.Screen name="EmptyScreen" component={EmptyScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
