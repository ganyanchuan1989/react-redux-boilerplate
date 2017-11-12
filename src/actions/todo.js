let idSeq = 0;
export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		id: getIdSeq(),
		text,
		completed: false,
	};
}

export function toggleTodo(todo) {
	const ac = Object.assign({ type: 'TOGGLE_TODO' }, todo);
	return ac;
}

export function getIdSeq() {
	idSeq += 1;
	return idSeq;
}

export function delTodo(todo) {
	return {
		type: 'DEL_TODO',
		id: todo.id,
	};
}
