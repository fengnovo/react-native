import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
    AppRegistry,  
    Image,  
    ListView, 
    RefreshControl, 
 } from 'react-native';

import B from './B'

import Detail from './Detail'

var REQUEST_URL = 'http://news-at.zhihu.com/api/4/news/before/20170520';  
var array = [];

class Home extends Component {
  constructor (props) {
    super(props);
    var ds = new ListView.DataSource({
             rowHasChanged:(row1,row2) => row1 !== row2
         }) 
        //  array = this.createCell(1);
         this.state = {  
             ds: ds,
             dataSource: ds.cloneWithRows(array),  
             loading: true,
             bLoad: false,
             listLoaded: false,
         } 
  }

  _navigate(id, type = 'Normal') {
    this.props.navigator.push({
      component: Detail,
      passProps: {
        id: id
      },
      type: type
    })
  }

  componentDidMount(){  
        fetch(REQUEST_URL)  
             .then((response) => response.json())  
             .then((responseData) => {  
                 console.log(responseData);  
                 array = responseData.stories;
                 this.setState({  
                     dataSource: this.state.ds.cloneWithRows(array),  
                     loading: false, 
                     listLoaded: true, 
                 });  
             }).catch(function(e){  
                   
             })  
             .done();   
     }  

     createCell (number) {
         let arr = [];
         for(let i = number; i<number+30;i++){
             arr.push('row'+i);
         }
         return arr
     }
  
     fetchData() {  
         fetch(REQUEST_URL)  
             .then((response) => response.json())  
             .then((responseData) => {  
                 console.log(responseData);  
                 this.setState({  
                     dataSource: this.state.dataSource.cloneWithRows(responseData.stories),  
                     loaded: true,  
                 });  
             }).catch(function(e){  
                   
             })  
             .done();  
     }  

    
    _renderRow (data) {
        return (
            <TouchableOpacity
                 style={styles.button}
                onPress={()=>this._navigate(data.id)}>
                <View style={styles.cellContainer}>  
                    
                    <View style={styles.rightContainer}>  
                        <Text style={styles.cellTitle}>{data.title}</Text>  
                        <Text style={styles.year}>{data.ga_prefix}</Text>  
                    </View>
                    <Image  
                        source={{uri: data.images[0]}}  
                        style={styles.thumbnail}  
                    />    
                </View>  
            </TouchableOpacity>    
        )
    }

    //下拉刷新时触发
    _onRefresh () {
        this.setState({
            loading: true
        });
        fetch(REQUEST_URL)  
             .then((response) => response.json())  
             .then((responseData) => {  
                 console.log(responseData);  
                 var newArr = responseData.stories;
                    array = newArr;
                    this.setState({
                        dataSource: this.state.ds.cloneWithRows(array),
                        loading: false,
                    })
             }).catch(function(e){  
                   
             })  
             .done();
    }

    //上拉加载时触发
    _onEndReached () {
        this.setState({
            bLoad: true
        })

        fetch(REQUEST_URL)  
             .then((response) => response.json())  
             .then((responseData) => {  
                 console.log(responseData);  
                 var newArr = responseData.stories;
                    array = array.concat(newArr);
                    this.setState({
                        dataSource: this.state.ds.cloneWithRows(array),
                        bLoad: false,
                    })
             }).catch(function(e){  
                   
             })  
             .done();

    }

  render() {   
  
         return (  
             <View style={styles.container}>
                    <View style={styles.headView}>
                        <Text style={styles.title}>首页</Text>
                    </View>
                    <B />
                    {
                        this.state.listLoaded ? (<ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}
                        refreshControl={
                            <RefreshControl 
                                onRefresh={this._onRefresh.bind(this)}
                                refreshing={this.state.loading}
                            />
                        }


                        onEndReached={this._onEndReached.bind(this)}
                        onEndReachedThreshold={10}

                    />) : null
                    }
                    {
                        this.state.bLoad ? (<View style={styles.loadingView}>
                                                <Text>数据加载中...</Text>
                                            </View>) : null
                    }
                    
            </View>
          
         );  
     }  
}

var styles = StyleSheet.create({
  homeContainer: {
    // flex: 1,
  },
  // 导航栏
  heading: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1046',
    position:'absolute',
    // marginBottom: 10
  },
  // 导航栏文字
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  // 按钮
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#eeeeee',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18
  },


  loadingView: {
        height:38,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headView: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
    },
     container: {  
         flex: 1, 
         backgroundColor: '#F5FCFF',  
     }, 
     cellContainer: {  
         flex: 1,  
         flexDirection: 'row',  
         justifyContent: 'center',  
         alignItems: 'center',  
         backgroundColor: '#F5FCFF',  
     },    
     title: {  
         fontSize: 22,  
         color: '#fff',
     }, 
     rightContainer: {  
         flex: 1,  
     },  
     cellTitle: {  
         fontSize: 20,  
         marginBottom: 8,  
         textAlign: 'center',  
     },
     year: {  
         textAlign: 'center',  
     },  
     thumbnail: {  
         width: 81,  
         height: 54,  
     }, 
     listView: {  
         paddingTop: 20,  
         backgroundColor: '#F5FCFF',  
     },  



});


export default Home;