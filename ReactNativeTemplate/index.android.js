/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Scene, Actions,Router} from 'react-native-router-flux';
import { Provider } from 'react-redux';
import {Scenes,Store,RouterWithRedux} from "./index.js";

class ReactNativeTemplate extends Component {
  render() {
    return (
        <Provider store={Store}>
          <RouterWithRedux scenes={Scenes}>
          </RouterWithRedux>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeTemplate', () => ReactNativeTemplate);
