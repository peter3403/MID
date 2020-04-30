import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 
'@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import TravelScreen from "./screen/components/TravelScreen";

//Screen
import Home from './screen/components/Home';
import Setting from './screen/components/Setting';
import Serve from './screen/components/Serve';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>

      {/* <Stack.Navigator
        initialRouteName="Home"

        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Travel"
          component={TravelScreen}
        />

      </Stack.Navigator> */}

  <Tab.Navigator
  initialRoute="Home"
  activeColor="#00BFFF"
  inactiveColor="#dedede"
  style={{backgroundColor:'#000'}}
  barStyle={{backgroundColor:'#0f0f0f', padding:4}}
  >
    <Tab.Screen name="首頁" component={Home} 
    options={{
      tabBarLabel: '首頁',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ),
    }}
    />
    <Tab.Screen name="服務" component={Serve} 
    options={{
      tabBarLabel: '服務',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="heart" color={color} size={26} />
      ),
    }}
    />
    <Tab.Screen name="設定" component={Setting} 
    options={{
      tabBarLabel: '設定',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="settings" color={color} size={26} />
      ),
    }}
    />
  </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 export default App;