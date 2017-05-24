/*import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View, ListView } from 'react-native'

class Zhihu extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    this.state = {  
        dataSource: new ListView.DataSource({  
            rowHasChanged: (r1, r2) => r1 !== r2,  
        }),  
    }; 
  }
  componentDidMount () {
    var myRequest = new Request('http://news-at.zhihu.com/api/4/news/before/20170520');  
  
    fetch(myRequest).then(function(response) {  
      return response.json().then(function(json) {  
        console.log(json.stories);
        this.setState({  
          dataSource: this.state.dataSource.cloneWithRows(json.stories),  
        });
      });  
    }); 
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <View>
              <Text style={{fontSize:20}}>{rowData.title}</Text>
              <Image  style={{width: 80, height: 80}}
                  source={{uri:rowData.images[0]}} />
            </View>}
        />
      </View>
    );
  }
}*/

import React, {  
    Component,  
} from 'react';  
  
import {  
     AppRegistry,  
     Image,  
     StyleSheet,  
     Text,  
     View,  
     ListView,  
 } from 'react-native';  
  
  
  
 var REQUEST_URL = 'http://news-at.zhihu.com/api/4/news/before/20170520';  
  
  
 class Zhihu extends Component  
 {  
     constructor(props) {  
         super(props);  
         this.state = {  
             dataSource: new ListView.DataSource({  
                 rowHasChanged: (row1, row2) => row1 !== row2,  
             }),  
             loaded: false,  
         };  
     }  
  
     componentDidMount(){  
         this.fetchData();  
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
  
     render() {  
         if (!this.state.loaded) {  
             return this.renderLoadingView();  
         }  
  
         return (  
             <ListView  
                 dataSource={this.state.dataSource}  
                 renderRow={this.renderMovie}  
                 style={styles.listView}  
             />  
          
         );  
     }  
  
     renderLoadingView()  
     {  
         return (<View style={styles.container} >  
                 <Text>Loading movies......</Text>  
             </View>  
  
         );  
     }  
  
     renderMovie(movie) {  
         return (  
             <View style={styles.container}>  
                 
                 <View style={styles.rightContainer}>  
                     <Text style={styles.title}>{movie.title}</Text>  
                     <Text style={styles.year}>{movie.ga_prefix}</Text>  
                 </View>
                 <Image  
                     source={{uri: movie.images[0]}}  
                     style={styles.thumbnail}  
                 />    
             </View>  
         );  
     }  
  
  
 };  
  
  
 var styles = StyleSheet.create({  
     container: {  
         flex: 1,  
         flexDirection: 'row',  
         justifyContent: 'center',  
         alignItems: 'center',  
         backgroundColor: '#F5FCFF',  
     },  
     rightContainer: {  
         flex: 1,  
     },  
     title: {  
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

AppRegistry.registerComponent('zhihu', () => Zhihu);
