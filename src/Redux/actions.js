import {DECREMENT, INCREMENT} from './types.js'

export function increment () {
	return {
		type: INCREMENT
	}
}

export function decrement () {
	return {
		type: DECREMENT
	}
}

export function asyncIncrement () {
	return function (dispatch) {
		setTimeout(() => {
			dispatch(increment())	
		}, 1000);
	}
}