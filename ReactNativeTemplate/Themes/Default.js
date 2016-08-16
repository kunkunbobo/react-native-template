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