import BC from "../../Utility/BaseComponent.js";
import {View, Text,StyleSheet} from "react-native";
import Button from "react-native-button";
import {TestStyles} from "../../Themes/Default.js";
import {Actions} from 'react-native-router-flux'

export default class Page1 extends BC {
	constructor(props){
		super(props);
		this.state={
			counter:0
		};
	}
	render() {
		return (
			<View style={TestStyles.View}>
				<Button style={[TestStyles.Button,this.state.counter%2===0?TestStyles.BgBlack:TestStyles.BgRed]}
				        onPress={()=>{
				        	let newState=Object.assign({},this.state);
				        	newState.counter++;
				        	this.setState(newState);
				        }}>Toggle Background Color</Button>
				<Button style={TestStyles.Button}
						onPress={()=>{
							Actions.Page2({
								Message:"hell react native :) "
							});
						}}>Go Page2</Button>
				<Text style={TestStyles.Text}>message</Text>
			</View>
		);
	}
}