import BC from "../../Utility/BaseComponent.js";
import {Text,View} from "react-native";
import {TestStyles} from "../../Themes/Default.js";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";


export default class Page2 extends BC{
	render(){
		return (
			<View style={TestStyles.View}>
				<Button style={TestStyles.Button} onPress={()=>{
					Actions.pop();
				}}>Go Back</Button>
				<Text style={[TestStyles.Text]}>{this.props.Message}</Text>
			</View>
		);
	}
}