import BC from "../../Utility/BaseComponent.js";
import {Text, View, Alert} from "react-native";
import {TestStyles} from "../../Themes/Default.js";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";

import TabView from "../Basic/TabView.js";
import Tab1 from "./Tab1.js";
import Tab2 from "./Tab2.js";

class Tab extends BC {
	render() {
		return (
			<View style={TestStyles.View}>
				<TabView tabBars={[{
					text:"1",
					content:<Tab1></Tab1>
				},{
					text:"2",
					content:<Tab2></Tab2>
				}]}></TabView>
			</View>
		);
	}
}

export default connect()(Tab);

