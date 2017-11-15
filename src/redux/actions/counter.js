// export const increment =()=>{
// 	return {
// 		type:'INCREMENT'
// 	}
// }

// export const decrement=()=>{
// 	return {
// 		type:"decrement"
// 	};
// }


export function increment(text) {
	console.log('object');
	return {
		type: 'INCREMENT',
	};
}

export function decrement(text) {
	return {
		type: 'DECREMENT',
	};
}
