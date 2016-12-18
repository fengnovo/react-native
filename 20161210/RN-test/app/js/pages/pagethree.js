import React, { Component, PropTypes } from 'react';
import { ListView,View, Text, TouchableHighlight } from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Pagethree extends Component {
 constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([
        '加载中...'
      ])
    };

    
  }


  componentDidMount (){
    fetch( 'http://bbs.reactnative.cn/api/category/3')
     .then((response)=>response.json())
      .then((jsondata) =>{
          let arr = [];
          jsondata.topics.map((i)=>{
              arr.push(i.slug);
          })
          this.setState({
            dataSource: ds.cloneWithRows(arr)
          })
      })
      .catch((error)=>{
        alert(error);
        console.warning(error);
      });
  }


  buttonTap = rowData => {
      alert(rowData)
  } 

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
              return <TouchableHighlight onPress={this.buttonTap.bind(this,rowData)} >
                <View style={{flexDirection: 'column', backgroundColor:'#fff'}}>
                  <View style={{flexDirection: 'row',padding:10, justifyContent:'center',flex:1,alignItems:'center'}} >
                      <Text style={{flex:1,marginRight:10,color:'gray',fontSize: 14}}>{rowData}</Text>
                  </View>
                  <View style={{height:.5,alignSelf:'stretch',backgroundColor:'gray'}}></View>
                </View>
              </TouchableHighlight>;
            }
          }
        />
      </View>
    );
  }
}

export default Pagethree