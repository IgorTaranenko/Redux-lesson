import {DISABLE_BUTTONS, ENABLE_BUTTONS, CHANGE_THEME, DECREMENT, INCREMENT} from './types.js'

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

export function enableButtons () {
	return {
		type: ENABLE_BUTTONS
	}
}

export function desableButtons () {
	return {
		type: DISABLE_BUTTONS
	}
}

export function changeTheme (newTheme) {
	return {
		type: CHANGE_THEME,
		payload: newTheme
	}
}

export function asyncIncrement () {
	return function (dispatch) {
		dispatch(desableButtons());
		setTimeout(() => {
			dispatch(increment())	
			dispatch(enableButtons());
		}, 1000);
	}
}