import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingPage from './src/screens/setting';
import HomePage from './src/screens/home';
import ListPage from './src/screens/list';
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import {Image} from 'react-native';
// import { MaterialIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          } else if (route.name === 'ListPage') {
            iconName = focused ? 'list-sharp' : 'list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
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
