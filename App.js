
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {AppTabNavigator} from './components/AppTabNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
    
    <AppContainer/>
   
    </SafeAreaProvider>
  )};
}

const switchNavigator=createSwitchNavigator({
  Login:{screen:Login},
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer= createAppContainer(switchNavigator)