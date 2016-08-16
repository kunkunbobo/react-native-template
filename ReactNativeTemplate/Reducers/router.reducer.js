import { ActionConst } from 'react-native-router-flux';

// const initialState = {
// 	scene: {}
// };

export default function reducer(state = {}, action = {}) {
	console.log("#"+action.type+"#");
	switch (action.type) {
		// focus action is dispatched when a new screen comes into focus
		case ActionConst.FOCUS:
			// console.log(state);
			return {
				...state
			};
		default:
			return state;
	}
}