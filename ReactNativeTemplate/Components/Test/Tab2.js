import BC from "../../Utility/BaseComponent.js";
import {Text,View,Alert} from "react-native";
import {TestStyles} from "../../Themes/Default.js";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import TestActions from "../../Actions/Test/Test.action.js";
import restClient from "../../Utility/RestClient.js";
// import request from "superagent";

class Tab extends BC{
	render(){
		return (
			<View style={TestStyles.View}>
				<Text>#2</Text>
			</View>
		);
	}
}

export default connect()(Tab);

