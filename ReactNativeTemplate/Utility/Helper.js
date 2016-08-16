import {AsyncStorage} from "react-native";
import config from "../Config/Global.config.js";

export function token(value){
	if(value){
		return AsyncStorage.setItem(config.TokenName,value);
	}
	return AsyncStorage.getItem(config.TokenName);
}