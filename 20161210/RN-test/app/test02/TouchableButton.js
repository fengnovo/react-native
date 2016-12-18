import React, { Component } from 'react';
import { Text, View, Navigator, TouchableHighlight, StyleSheet, AppRegistry }  from 'react-native';


  
class TouchableButton extends Component {  
  render() {  
    return (  
        <TouchableHighlight   
          underlayColor={this.props.underlayColor}  
          activeOpacity={0.5}    
          style={this.props.style}  
          onPress={this.props.onPress}  
          >  
             <Text style={{fontSize:16,color:'#fff'}}>{this.props.text}</Text>  
        </TouchableHighlight>  
    );  
  }  
}  
  
module.exports = TouchableButton; 