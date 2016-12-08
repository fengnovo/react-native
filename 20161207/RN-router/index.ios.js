import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import App from './rn/app.js';

class RNRouter extends Component {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent('RNRouter', () => RNRouter);

