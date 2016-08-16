/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

// import {Scene, Actions,Router} from 'react-native-router-flux';
import {Scenes,Store,RouterWithRedux} from "./index.js";
import { Provider } from 'react-redux';
import {HeaderStyles} from "./Themes/Default.js";

class ReactNativeTemplate extends Component {
  render() {
    return (
        <Provider store={Store}>
          <RouterWithRedux scenes={Scenes} {...HeaderStyles}>
          </RouterWithRedux>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTemplate', () => ReactNativeTemplate);
