import React, { Component } from 'react';
import { Text, View, ScrollView,
  RefreshControl, 
  TouchableHighlight, StyleSheet }  from 'react-native';
  
class MyScrollView extends React.Component { 
  constructor(props) {
    super(props);
    this._onScrollBeginDrag = this._onScrollBeginDrag.bind(this);
    this._onScrollEndDrag = this._onScrollEndDrag.bind(this);
    this._onMomentumScrollBegin = this._onMomentumScrollBegin.bind(this);
    this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }


  _onScrollBeginDrag() {
    console.log('开始拖拽');
  }

  _onScrollEndDrag() {
    console.log('结束拖拽');
  }

  _onMomentumScrollBegin() {
    console.log('开始滑动');
  }

  _onMomentumScrollEnd() {
    console.log('滑动结束');
  }

  _onRefresh () {
    console.log('刷新');
  }

  render() {
     return (
      <View style={styles.container}>
        <ScrollView 
            style={styles.scrollView}
            showVerticalScrollIndicator={true}
            onScrollBeginDrag={this._onScrollBeginDrag}
            onScrollEndDrag={this._onScrollEndDrag}
            onMomentumScrollBegin={this._onMomentumScrollBegin}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            refreshControl={
              <RefreshControl 
                refreshing={false}  
                onRefresh={this._onRefresh}  
                colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}  
                progressBackgroundColor="#ffffff" 
                title="正在刷新..."
                 />
            }
            >
          <View style={styles.view1}>
          </View>
          <View style={styles.view2}>
          </View>
          <View style={styles.view3}>
          </View>
        </ScrollView>
        </View>
      )
  }
    
}  
  
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: "cyan"
  },
  scrollView : {
    marginTop: 25,
    backgroundColor: "#cccccc"
  },
  view1 : {
    margin: 15,
    flex: 1,
    height: 300,
    backgroundColor: "yellow"
  },
  view2 : {
    margin: 15,
    flex: 1,
    height: 300,
    backgroundColor: "blue"
  },
  view3 : {
    margin: 15,
    flex: 1,
    height: 300,
    backgroundColor: "green"
  },
});  
  
export default MyScrollView  