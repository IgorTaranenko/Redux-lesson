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