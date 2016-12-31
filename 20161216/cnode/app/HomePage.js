import React from 'react';
import { Text, View, ScrollView, Image,
  RefreshControl, 
  TouchableHighlight, StyleSheet } from 'react-native';

import Detail from './Detail';

class HomePage extends React.Component {
	
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    }

    // this._onScrollBeginDrag = this._onScrollBeginDrag.bind(this);
    // this._onScrollEndDrag = this._onScrollEndDrag.bind(this);
    // this._onMomentumScrollBegin = this._onMomentumScrollBegin.bind(this);
    // this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this);
    // this._onRefresh = this._onRefresh.bind(this);

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

  	_openPage(id, title) {
		this.props.navigator.push({
			title: '详情',
			component: Detail,
			params: {
				id: id,
				title: title
			}
		})
	}

  render() {
      let Arr = [], lists = this.state.lists, _this = this; 
	  console.log(_this);
      for (let i in lists){
          let list = lists[i];
          let row = (
			  <TouchableHighlight  key={list.id} onPress={_this._openPage.bind(this,list.id, list.title)}> 
				<View style={styles.row}>
					<Image  style={styles.imgStyle}
					source={{uri:list.author.avatar_url}}/>
					<View style={styles.rightContainer}>
					<Text style={styles.title}>{list.title}</Text>
					<Text style={styles.year}>{list.last_reply_at}</Text>
					</View>
				</View>
			  </TouchableHighlight> 
          );
          Arr.push(row);
      }

     return (
      <View>
        <ScrollView >
           
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

export default HomePage;