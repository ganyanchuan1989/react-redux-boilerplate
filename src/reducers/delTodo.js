export default (state = [], action) => { 
	console.log("delete todo ",state);
	switch (action.type) {
			case 'DEL_TODO':
						for (let i = 0; i < state.length; i++) {
							const todo = state[i];
							if (todo.id === action.id) {
								state.splice(i, 1);
								break;
							}
						}
						return state;
			default:
					return state;
	}
};
