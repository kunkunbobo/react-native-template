import {Component} from "react";
import {
	PropTypes, View, Text,
	StyleSheet, ActivityIndicator,
	Dimensions
} from "react-native";
import {LoadingStyles} from "../../Themes/Default.js";


export default class Loading extends Component {
	constructor(props){
		super(props);
		this.state={
			visible:props.visible
		};
	}
	static propTypes(){
		return {
			visible:PropTypes.bool
		}
	}
	static defaultProps(){
		return {
			visible:false
		}
	}
	componentWillReceiveProps(nextProps){
		let newState={
			visible:nextProps.visible
		};
		this.setState(newState);
	}
	show(){
		this.setState({visible:true});
	}
	hide(){
		this.setState({visible:false});
	}
	render() {
		return this.state.visible?<ActivityIndicator size="large"
													 style={LoadingStyles.loading}></ActivityIndicator>:null;
	}
}