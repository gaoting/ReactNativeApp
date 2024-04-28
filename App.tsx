/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingPage from './src/screens/setting';
import HomePage from './src/screens/home';
import ListPage from './src/screens/list';
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'List') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: 'tomato', //当前项目激活后的颜色
        inactiveTintColor: 'gray', //未激活的颜色
      }}>
      {/* options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} */}
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="List" component={ListPage} />
      <Tab.Screen name="Setting" component={SettingPage} />
    </Tab.Navigator>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('./src/assets/vue-logo.png')}
    />
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MY App"
          component={MyTabs}
          options={{
            headerBackTitle: 'Custom Back',
            headerBackTitleStyle: {fontSize: 30},
          }}
        />

        {/* <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="List" component={ListPage} />
        <Stack.Screen name="Setting" component={SettingPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
