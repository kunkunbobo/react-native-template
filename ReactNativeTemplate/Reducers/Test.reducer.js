
export default function reducer(state={},action={}){
	switch (action.type){
		case "HELLO":
			return {
				...state,
				message:action.message
			};
		default:
			return state;
	}
}