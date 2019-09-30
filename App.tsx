import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Componenteuno from './components/componenteuno'
import HomeScreen from './components/HomeScreen'
import ProfileScreen from './components/ProfileScreen'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

export default  createAppContainer(MainNavigator);



