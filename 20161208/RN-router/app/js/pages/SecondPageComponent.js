
import   React, {Component} from 'react';
import {
  View,
    Text,
    TouchableOpacity,
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:"",
        };
    }

    componentDidMount(){
        this.setState({
            message:this.props.message,
        });
    }

    _pressButton(){
        const { navigator } = this.props;
        if(this.props.getResult){
            this.props.getResult("This is from SecondPageComponent");
        }

        if(navigator){
            navigator.pop();
        }
    }

    render(){
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>{this.state.message}</Text>
                </TouchableOpacity>
            </View>
            );
    }
}