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
  
  
 class App extends Component  
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


export default App;