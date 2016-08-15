import { createStore, applyMiddleware, compose } from 'redux';
import reducers from "../Reducers/main.reducer.js";

const middleware=[];

const store=compose(
	applyMiddleware(...middleware)
)(createStore)(reducers);

export default store;