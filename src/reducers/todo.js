import { combineReducers } from 'redux';

import delTodo from './delTodo';

const config = (state = [], action) => {
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
						console.log('<>>>>>>>>>>', state, action);
            return state.map(todo =>
								((todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo));
				// case 'DEL_TODO':
				// 			for (let i = 0; i < state.length; i++) {
				// 				const todo = state[i];
				// 				if (todo.id === action.id) {
				// 					state.splice(i, 1);
				// 					break;
				// 				}
				// 			}
				// 			return state;
        default:
            return state;
    }
};


export default combineReducers({
	normal: config,
	delTodo,
});
