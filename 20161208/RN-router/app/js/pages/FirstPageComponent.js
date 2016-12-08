import   React, {Component} from 'react';
import {
  View,
    Text,
    TouchableOpacity,
} from 'react-native';

import SecondPageComonent from "./SecondPageComponent";

export default class FirstPageComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            resultMessage:"hello",
        };
    }

    _pressButtoon(){
        var _this = this;
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'SecondPageComonent',
                component:SecondPageComonent,
                params:{
                    message:"I am from FirstPageComponent",
                    getResult:function(myMessage){
                        _this.setState({
                            resultMessage:myMessage,
                        })
                    }
                }
            })
        }
    }

    render(){
        return (
            <View>
                <TouchableOpacity onPress={this._pressButtoon.bind(this)}>
                    <Text>{this.state.resultMessage}</Text>
                </TouchableOpacity>
            </View>
            );
    }
}