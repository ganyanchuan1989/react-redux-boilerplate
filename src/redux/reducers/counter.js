
function createReducer(initState=0){
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>createRedeud");
	return function reducer(state = initState,action){
		switch (action.type) {
				case "INCREMENT":
					return state + 1;
					break;
				case "DECREMENT":
					return state - 1;
					break;
				default:
					return state;
					break;
			}
	}
}

export default createReducer(0);

// return (state=0,action)=>{
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return state + 1;
// 			break;
// 		case "DECREMENT":
// 			return state - 1;
// 			break;
// 		default:
// 			return state;
// 			break;
// 	}
// }	
