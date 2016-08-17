import BC from "../../Utility/BaseComponent.js";
import {PropTypes, View, Text, StyleSheet,ActivityIndicator,Dimensions} from "react-native";
import Button from "react-native-button";
import {TestStyles} from "../../Themes/Default.js";
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {alert,confirm} from "../../Utility/Helper.js";
import Loading from "../Basic/Loading.js";
import * as Animatable from 'react-native-animatable';

let {width,height}=Dimensions.get("window");
console.log(width,height);

let TadaButton=Animatable.createAnimatableComponent(Button);

const LoadingStyle=StyleSheet.create({
	normal:{
		backgroundColor:"gray",
		position:"absolute",
		top:0,
		left:0,
		right:0,
		bottom:0,
		opacity:0.8
	}
});

class Page1 extends BC {
	constructor(props) {
		super(props);
		// console.log(this.props);
		// console.log(this.state);
		this.state = {
			counter: 0
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
				<Text style={TestStyles.Text}>{this.props.title}</Text>
				<Button style={TestStyles.Button} onPress={()=>{
					alert("alert");
				}}>alert</Button>
				<Button style={TestStyles.Button} onPress={()=>{
					confirm("confirm");
				}}>confirm</Button>
				<Button style={TestStyles.Button} onPress={()=>{
					this.refs.loading.show();
					setTimeout(()=>{
						this.refs.loading.hide();
					},2000);

				}}>Show Loading</Button>
				<Loading ref="loading"></Loading>
				<TadaButton style={TestStyles.Button}
							ref="tadabutton"
							onPress={()=>{
								this.refs.tadabutton.tada(100)
								console.log(arguments);
							}}>Tada Button</TadaButton>
			</View>
		);
	}
}
// export default Page1;
export default connect()(Page1);
// export default connect(({routes},args) => {
// 	console.log("==== begin connect ====")
// 	console.log(routes)
// 	console.log(args)
// 	console.log("==== end connect ====")
// 	return ({routes});
// })(Page1);