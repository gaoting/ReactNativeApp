import React, {useCallback} from 'react';
import {Text, View, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import List from './list';
import Home from './home';
import Setting from './setting';
import IconComponent from '../components/icons';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <IconComponent name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <IconComponent
              name="format-list-bulleted"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <IconComponent name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
