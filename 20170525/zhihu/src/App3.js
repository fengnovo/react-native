import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: '我初始的页面', index: 0 }}
        renderScene={(route, navigator) => (
          <MyScene
            title={route.title}

            //调用此函数显示新界面
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: '屏幕 ' + nextIndex,
                index: nextIndex,
              });
            }}

            //调用此函数返回当前界面
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        )
        }
      />
    )
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View>
        <Text>当前屏幕是: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点击此处到下一屏幕</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>返回</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


export default App;