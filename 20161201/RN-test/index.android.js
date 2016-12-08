import React, { Component } from 'react';
import { AppRegistry,View,Text,TextInput,Image,ScrollView,ListView,
          Navigator,TouchableHighlight,StyleSheet,Animated } from 'react-native';
import Blink from './app/js/components/Blink.js'
import MySceneOne from './app/js/components/MySceneOne.js'

import Pageone from './app/js/pages/pageone.js'
import Pagetow from './app/js/pages/pagetow.js'
import Pagethree from './app/js/pages/pagethree.js'

import  ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';


class RNTest extends Component {
  render() {
    return <ScrollableTabView>
        <Pagethree tabLabel="Pagethree" />
        <Pageone tabLabel="Pageone" />
        <Pagetow tabLabel="Pagetow" />
        
      </ScrollableTabView>;
  }
}

const styles = StyleSheet.create({
  wh:{
    'width': 100, 
    'height': 110
  }
});

AppRegistry.registerComponent('RNTest', () => RNTest);
