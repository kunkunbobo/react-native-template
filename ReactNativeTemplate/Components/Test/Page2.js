import BC from "../../Utility/BaseComponent.js";
import {Text,View,Alert} from "react-native";
import {TestStyles} from "../../Themes/Default.js";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import TestActions from "../../Actions/Test/Test.action.js";
import restClient from "../../Utility/RestClient.js";
// import request from "superagent";


class Page2 extends BC{
	render(){
		return (
			<View style={TestStyles.View}>
				<Button style={TestStyles.Button} onPress={()=>{
					Actions.pop();
				}}>Go Back</Button>
				<Button style={TestStyles.Button} onPress={()=>{
					this.props.hello();
				}}>Trigger Hello</Button>
				<Text style={[TestStyles.Text]}>message from router params : {this.props.Message}</Text>
				<Text style={[TestStyles.Text]}>message from store : {this.props.message}</Text>
				<Button style={TestStyles.Button} onPress={()=>{
					// fetch("http://lwapp.yzw.cn/home/GetHomeInfo").then((res)=>{
					// 	return res.json().then((json)=>{
					// 		console.log(json);
					// 		Alert.alert("Title",json.Message);
					// 	});
					//
					// }).catch((err)=>{
					// 	console.log(err);
					// });
					restClient.request({
						url:"http://lwapp.yzw.cn/home/GetHomeInfo"
					}).then((result)=>{
						console.log(result);
					}).catch((err)=>{
						console.log(err);
					});
				}}>Test Rest Client</Button>
			</View>
		);
	}
}

export default connect(({testReducer})=>{
	console.log(testReducer);
	return {
		message:testReducer.message
	};
},(dispatch)=>{
	return {
		hello(){
			return dispatch(TestActions.Hello());
		}
	};
})(Page2);

