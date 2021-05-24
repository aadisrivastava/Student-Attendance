//student attendance app
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';
import HomeScreen from './Screens/HomeScreen';
import BuzzerScreen from './Screens/SummaryScreen';
import db from './config.js';

console.log(db)

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  //SummaryScreen: SummaryScreen
});

const AppContainer = createAppContainer(AppNavigator);
