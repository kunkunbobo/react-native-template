// import React, { Component } from 'react';
import {Scene, Actions} from 'react-native-router-flux';
import Page1 from "./Components/Test/Page1.js";
import Page2 from "./Components/Test/Page2.js";

const scenes=Actions.create(
	<Scene key="root">
		<Scene key="Page1" component={Page1} title="Page1" initial={true}></Scene>
		<Scene key="Page2" component={Page2} title="Page2" ></Scene>
	</Scene>
);

export default scenes;