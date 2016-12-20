import React, { Component } from 'react';
import { Text, View, ScrollView,
  RefreshControl, 
  TouchableHighlight, StyleSheet }  from 'react-native';
  
class MyScrollView extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
        isRefresh: false 
    }

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
     this.setState({isRefresh: true});  
      setTimeout(() => {  
        // 准备下拉刷新的5条数据  
        // const rowData = Array.from(new Array(5))  
        // .map((val, i) => ({  
        //   text: '刷新行 ' + (+this.state.loaded + i)  
        // }))  
        // .concat(this.state.rowData);  
     
        this.setState({  
          // loaded: this.state.loaded + 5,  
          isRefresh: false,  
          // rowData: rowData,  
        });  
      }, 5000);  
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
                refreshing={this.state.isRefresh}  
                onRefresh={this._onRefresh}  
                colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}  
                progressBackgroundColor="#ffffff" 
                 />
            }>
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