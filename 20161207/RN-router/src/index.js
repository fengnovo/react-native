import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { createMemoryHistory, Router, IndexRoute, Route } from 'react-router';
import { createNavigatorRouter } from 'react-native-navigator-router';

class Home extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static defaultProps() {
    return {
      key: 'home',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.context.router.push('/about')}>
          <Text style={styles.welcome}>
            This is Home, go to About.
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}


class About extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static defaultProps() {
    return {
      key: 'about',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.context.router.push('/detail')}>
          <Text style={styles.welcome}>
            This is About, go to detail.
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.context.router.goBack()}>
          <Text style={styles.welcome}>
            Press here to go back home.
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class Detail extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static defaultProps() {
    return {
      key: 'detail',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.context.router.go(-2)}>
          <Text style={styles.welcome}>
            This is detail, Press here to go back home.
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Router history={createMemoryHistory('/')}>
        <Route path='/' component={createNavigatorRouter()}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/detail" component={Detail} />
        </Route>
      </Router>
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

export default App;
