import { combineReducers } from 'redux';
import routerReducer from "./router.reducer.js";
import testReducer from "./Test.reducer.js";

export default combineReducers({
	routerReducer
	,testReducer
});