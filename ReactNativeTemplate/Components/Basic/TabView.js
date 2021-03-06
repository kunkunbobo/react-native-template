import {PropTypes, Component} from "react";
import {View, Image, Text, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {alert} from "../../Utility/Helper.js";

const TabViewStyles = StyleSheet.create({
	TabContainer: {
		backgroundColor: "blue",
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end"
	},
	TabContent: {},
	TabBar: {
		backgroundColor: "red",
		flex: 1
	},
	TabBarNavigation: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around"
	}
});

export default class TabView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 0
		};
	}

	static propTypes() {
		return {
			tabBars: PropTypes.arrayOf(PropTypes.shape({
				text: PropTypes.string,
				content: PropTypes.element.isRequired,
				tabIcon: PropTypes.any
			})),
			tabBarPosition: PropTypes.oneOf(["top", "bottom"])
		}
	}

	static defaultProps() {
		return {
			tabBarPosition: "top"
		}
	}

	render() {
		return (
			<View style={{flex:1,flexDirection:"column"}}>
				<View style={{flex:1}}>
					{this.props.tabBars[this.state.tabIndex].content}
				</View>
				<View style={{height:30,backgroundColor:"blue"}}>
					<View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
						{this.props.tabBars.map((bar, index)=> {
							return (
								<TouchableWithoutFeedback key={index} onPress={()=>{
							      	//alert(index);
							      	this.setState({tabIndex:index});
							      }}>
									<View style={{flex:1/this.props.tabBars.length}}>
										<Text style={{flex:1,backgroundColor:"yellow",textAlign:"center"}}>{bar.text}</Text>
									</View>
								</TouchableWithoutFeedback>
							);
						})}
					</View>
				</View>
			</View>
		);
	}
}

