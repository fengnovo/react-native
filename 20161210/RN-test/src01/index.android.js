import React, { Component } from 'react';
import { Text, View, Navigator, TouchableHighlight, StyleSheet, AppRegistry }  from 'react-native';

  
import FirstPageComponent from './app/test01/FirstPageComponent';  
  
class ReactNativeDemo extends Component {  
  render() {  
    var defaultName = 'FirstPageComponent';  
    var defaultComponent = FirstPageComponent;  
    return (  
        <Navigator  
            initialRoute={{ name: defaultName, component: defaultComponent }}  
            configureScene={(route) => {  
            return Navigator.SceneConfigs.HorizontalSwipeJump;  
        }}  
        renderScene={(route, navigator) => {  
            let Component = route.component;  
            return <Component {...route.params} navigator={navigator} />  
        }}/>  
    );  
  }  
}  
AppRegistry.registerComponent('RNTest', () => ReactNativeDemo);  