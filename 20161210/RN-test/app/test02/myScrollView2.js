import React, { Component } from 'react';
import { Text, View, ScrollView, Image,
  RefreshControl, 
  TouchableHighlight, StyleSheet }  from 'react-native';
  
class MyScrollView extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      lists: []
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
    console.log('刷新');
  }

  componentWillMount () {

  }
  componentDidMount () {
    fetch('https://cnodejs.org/api/v1/topics')
          .then(res => res.json())
          .then(data =>{
                  console.log(data);
                  this.setState({
                    lists: data.data 
                  });
              }
          )
          .catch(e=>console.log(e))
          .done();
  }
  componentWillUnmount () {

  }

  render() {
      let Arr = [], lists = this.state.lists; 
      for (let i in lists){
          let list = lists[i];
          console.log(list.author.avatar_url);
          let row = (
              <View key={list.id} style={styles.row}>
                <Image  style={styles.imgStyle}
                  source={{uri:list.author.avatar_url}}/>
                <View style={styles.rightContainer}>
                  <Text style={styles.title}>{list.title}</Text>
                  <Text style={styles.year}>{list.last_reply_at}</Text>
                </View>
              </View>
          );
          Arr.push(row);
      }

     return (
      <View>
        <ScrollView 
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
          {
              Arr
          }
        </ScrollView>
        </View>
      )
  }
    
}  
  
const styles = StyleSheet.create({ 
  row: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  imgStyle: {
    width: 54,
    height: 80,
    backgroundColor: "gray"
  },
  rightContainer:{
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    marginBottom: 3,
    textAlign: "center"
  },
  year: {
    marginBottom: 3,
    textAlign: "center"
  }


});  
  
export default MyScrollView  