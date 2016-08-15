import BC from "../../Utility/BaseComponent.js";
import {Text,View} from "react-native";
import {TestStyles} from "../../Themes/Default.js";


export default class Page2 extends BC{
	render(){
		return (
			<View style={TestStyles.View}>
				<Text style={[TestStyles.Text]}>{this.props.Message}</Text>
			</View>
		);
	}
}