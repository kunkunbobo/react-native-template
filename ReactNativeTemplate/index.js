// import React, { Component } from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {connect} from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from "./Reducers";
import Page1 from "./Components/Test/Page1.js";
import Page2 from "./Components/Test/Page2.js";
import Tab from "./Components/Test/Tab.js";

const RouterWithRedux = connect()(Router);

const middleware=[];

const Store=compose(
	applyMiddleware(...middleware)
)(createStore)(reducers);

const Scenes = Actions.create(
	<Scene key="root" duration={0}>
		<Scene key="Page1" component={Page1} title="Page1" initial={true}></Scene>
		<Scene key="Page2" component={Page2} title="Page2"></Scene>
		<Scene key="Tab" component={Tab} title="Tab Demo"></Scene>
	</Scene>
);

export {
	Scenes,
	RouterWithRedux,
	Store
};
