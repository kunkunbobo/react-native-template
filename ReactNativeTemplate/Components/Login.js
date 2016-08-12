import BaseComponent from "../Utility/BaseComponent.js";
// import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Button from "react-native-button";

export default class Login extends BaseComponent {
	render() {
		return (
			<View style={{flexDirection: 'row', height: 100, padding: 20}}>
				<Text style={{color:"black"}}>Hello World!</Text>
				<Button
					style={{fontSize: 20, color: 'green'}}
					styleDisabled={{color: 'red'}}
					onPress={() => this._handlePress()}>
					Press Me!
				</Button>
			</View>
		);
	}
}