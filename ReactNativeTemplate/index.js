// import React, { Component } from 'react';
import {Scene, Actions} from 'react-native-router-flux';
import Page1 from "./Components/Test/Page1.js";
import Page2 from "./Components/Test/Page2.js";

const scenes=Actions.create(
	<Scene key="root">
		<Scene key="page1" component={Page1} title="page1"></Scene>
		<Scene key="page2" component={Page2} title="page2"></Scene>
	</Scene>
);

export default scenes;