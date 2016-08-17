import {StyleSheet} from "react-native";

export const TestStyles=StyleSheet.create({
		Text:{
			color:"white",
			textAlign:"left"
		},
		BgRed:{
			backgroundColor:"red"
		},
		BgBlack:{
			backgroundColor:"black"
		},
		Button:{
			backgroundColor:"black",
			color:"white",
			padding:10,
			marginTop:10,
			marginBottom:10
		},
		View:{
			flex:1,
			flexDirection:"column",
			justifyContent:"center",
			backgroundColor:"gray"
		}
	});

export const HeaderStyles=StyleSheet.create({
	titleStyle:{
		color:"red",
		backgroundColor:"black"
	},
	navigationBarStyle:{
		// backgroundColor:"black"
	},
	barButtonTextStyle:{
		//do something
	},
	barButtonIconStyle:{
		//do something
	}
});

export const LoadingStyles=StyleSheet.create({
	loading:{
		backgroundColor:"rgba(0,0,0,0.7)",
		position:"absolute",
		top:0,
		bottom:0,
		left:0,
		right:0
	}
});