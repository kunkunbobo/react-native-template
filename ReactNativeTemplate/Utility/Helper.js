import {AsyncStorage, Alert} from "react-native";
import config from "../Config/Global.config.js";

export function token(value) {
	if (value) {
		return AsyncStorage.setItem(config.TokenName, value);
	}
	return AsyncStorage.getItem(config.TokenName);
}

export function alert(message, callback) {
	Alert.alert("提示", message, [
		{
			text: "确定", onPress(){
			if (callback) {
				callback();
			}
		}
		}
	]);
}

export function confirm(message, callback) {
	Alert.alert("确认", message, [
		{
			text: "确定", onPress(){
			if (callback) {
				callback(true);
			}
		}
		},
		{
			text: "取消", onPress(){
			if (callback) {
				callback(false);
			}
		}
		}
	]);
}