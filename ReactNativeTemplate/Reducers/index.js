import { combineReducers } from 'redux';
import routerReducer from "./Router.reducer.js";
import testReducer from "./Test.reducer.js";

export default combineReducers({
	routerReducer
	,testReducer
});