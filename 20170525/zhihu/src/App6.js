import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
 } from 'react-native';

import Home from './Home'

class App extends Component {
  constructor (props) {
    super(props);
  }

  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{component: Home}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}/>
    );
  }
}



export default App;