import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  WebView,
 } from 'react-native';

// 第二页, 点击跳出返回第一页
class Detail extends Component {
  constructor (props) {
    super(props);
    this.getHtml = (content,css,title,img) => `
        <!DOCTYPE html>\n
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport"
              content="width=device-width, maximum-scale=1, minimum-scale=1, initial-scale=1, user-scalable=no">
            <title>详情</title>
            <link rel="stylesheet" href=${css}>  
            <style>
              .fengnvobanner {
                  height: 200px;
                  width: 100%;
                  overflow: hidden;
                  background: no-repeat center center;
                  background-color: #000;
                  display:${img?"block":"none"}
              }
              .fengnvobanner .title {
                font-size: 1.4rem;
                color: #fff;
                display: block;
                margin-top: 130px;
              }
              .headline {
                display: none;
              }
            </style>
          </head>
          <body>
            <div class="fengnvobanner" style="background-image:url(${img})">
              <span class="title">${title}</span>
            </div>
            ${content}
          </body>
        </html>
        `
    this.state = {
      _html: this.getHtml( `
      <style>
      .spinner {
        margin: 100px auto;
        width: 50px;
        height: 60px;
        text-align: center;
        font-size: 10px;
      }
      
      .spinner > div {
        background-color: #67CF22;
        height: 100%;
        width: 6px;
        display: inline-block;
        
        -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
        animation: stretchdelay 1.2s infinite ease-in-out;
      }
      
      .spinner .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
      
      .spinner .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
      }
      
      .spinner .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }
      
      .spinner .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }
      
      @-webkit-keyframes stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
        20% { -webkit-transform: scaleY(1.0) }
      }
      
      @keyframes stretchdelay {
        0%, 40%, 100% {
          transform: scaleY(0.4);
          -webkit-transform: scaleY(0.4);
        }  20% {
          transform: scaleY(1.0);
          -webkit-transform: scaleY(1.0);
        }
      }
      </style>
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>`),
    }
  }

  componentDidMount () {
    fetch(`http://news-at.zhihu.com/api/4/news/${this.props.id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        _html: this.getHtml(data.body,data.css,data.title,data.image)
      })
    })
    .catch(error => {
      alert(error);
    })
  }

  
  render() {
    return (
      <View style={styles.detailContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigator.pop()}>
          <Text style={styles.buttonText}>
            返回
          </Text>
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={styles.headText}>
            详情页
          </Text>
        </View>
        
      </View>
        <WebView
          source={{html:this.state._html}}
          style={{marginTop: -520}}
        />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  },

  container: {
    flex: 10,
    flexDirection: 'row',
  },
  
  // 导航栏
  heading: {
    flex: 8,
    height: 44,
    // alignItems: 'center',
    justifyContent: 'center', // 内容居中显示
    backgroundColor: 'green',
  },
  // 导航栏文字
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  // 按钮
  button: {
    flex: 2,
    height: 44,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: 'green',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  },

  contentContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
});


export default Detail;