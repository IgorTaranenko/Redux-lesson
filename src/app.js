import * as $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.less'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer.js'
import {asyncIncrement, increment, decrement} from './redux/actions.js'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('Add')
const removeBtn = document.getElementById('Remove')
const asyncBtn = document.getElementById('Async')
const themeBtn = document.getElementById('theme')


const store = createStore(
	rootReducer, 
	0,
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

store.subscribe(() => {
	const state = store.getState();

	counter.textContent = state
})

store.dispatch({type: 'INIT'})