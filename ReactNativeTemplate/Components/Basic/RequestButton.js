import Button from "react-native-button";
import {Component, PropTypes} from "react";



class RequestButton extends Component {
	constructor(props){
		super(props);
		this.state={
			disabled:false
		};
	}
	static propTypes() {
		return {
			onRequest: PropTypes.func,
			style: PropTypes.object
		};
	}

	static defaultProps() {
		return {
			onRequest: ()=> {
			}
		};
	}

	render() {
		return <Button style={this.props.style}
					   ref="button"
					   disabled={this.state.disabled}
					   styleDisabled={{backgroundColor:"gray"}}
					   onPress={()=>{
					   		this.setState({disabled:true});
							this.props.onRequest().then(()=>{
					   			this.setState({disabled:false});
							}).catch(()=>{
								this.setState({disabled:false});
							});
		}}>{this.props.children}</Button>
	}
}

export default RequestButton;
