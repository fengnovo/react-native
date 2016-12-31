import React from 'react';
import{
	View,
	Text,
	TextInput,
	TouchableOpacity,
	WebView,
	StyleSheet
} from 'react-native';

import My from './My';

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			title: this.props.title,
			content: '加载中...',
		}
	}


	componentDidMount () {
		fetch('https://cnodejs.org/api/v1/topic/'+this.props.id)
			.then(res => res.json())
			.then(data =>{
					this.setState({
						content: data.data.content 
					});
				}
			)
			.catch(e=>console.log(e))
			.done();
  }

	_openPage() {
		this.props.navigator.push({
			component: My,
			params: {
				name: this.state.name,
				age: this.state.age,
				changeMyAge: (age) => {
					this.setState({ age })
				}
			}
		})
	}
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
				<Text>{this.state.title}</Text>
				<HtmlText style={styles.welcome} html={this.state.content}></HtmlText>
			</View>
		);
	}
}


const styles = StyleSheet.create({ 
  welcome: {
    flex: 1
  }

}); 


export default Detail;