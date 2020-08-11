import * as $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.less'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer.js'
import {asyncIncrement, changeTheme, increment, decrement} from './redux/actions.js'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('Add')
const removeBtn = document.getElementById('Remove')
const asyncBtn = document.getElementById('Async')
const themeBtn = document.getElementById('theme')


const store = createStore(
	rootReducer, 
	applyMiddleware(thunk),
	);

addBtn.addEventListener('click', () => {
	store.dispatch(increment());
})

removeBtn.addEventListener('click', () => {
	store.dispatch(decrement());
})

asyncBtn.addEventListener('click', () => {
	store.dispatch(asyncIncrement());
})

themeBtn.addEventListener('click', () => {
	const newTheme = document.body.classList.contains('light')
	? 'dark'
	: 'light'
	store.dispatch(changeTheme(newTheme));
})

store.subscribe(() => {
	const state = store.getState();
	counter.textContent = state.counter;
	document.body.className = state.theme.value;

	[addBtn, removeBtn, themeBtn, asyncBtn].forEach((btn) => {
		btn.disabled = state.theme.disabled;
	})
})

store.dispatch({type: 'INIT'})