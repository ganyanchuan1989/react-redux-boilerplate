export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed,
                },
            ];
				case 'TOGGLE_TODO':
            return state.map(todo =>
								((todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo));
				case 'DEL_TODO':
						let nextState = state.slice(0);
						for (let i = 0; i < nextState.length; i++) {
							const todo = nextState[i];
							if (todo.id === action.id) {
								nextState.splice(i, 1);
								break;
							}
						}
							return nextState;
        default:
            return state;
    }
};
