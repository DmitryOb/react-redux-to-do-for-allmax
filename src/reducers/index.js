import { combineReducers } from 'redux';

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_EMPTY_TODO': return [ ...state, todo(undefined, action) ];
		case 'DELETE_ITEM': return state.filter(t => t.id !== action.id)
		case 'CHANGE_NAME':
		case 'CHANGE_DESCRIPTION':
		case 'CHANGE_PRIORITY':
		case 'CHANGE_PLANE_TIME':
		case 'CHANGE_DONE_TIME':
		case 'TOGGLE_TODO': return state.map(t => todo(t, action));
		default: return state;
	}
};

const todo = (state, action) => {
	switch (action.type){
		case 'ADD_EMPTY_TODO': return {
			id: action.id, 
			completed: false, 
			name: action.name, 
			description: action.description,
			priority: action.priority,
			planeTime: action.planeTime,
			doneTime: action.doneTime,
			overdue: false,
		};
		case 'TOGGLE_TODO': if (state.id !== action.id) { return state }
							return { ...state, completed: !state.completed };
		case 'CHANGE_NAME': if (state.id !== action.id) { return state }
							return { ...state, name: action.name };
		case 'CHANGE_DESCRIPTION': if (state.id !== action.id) { return state }
							return { ...state, description: action.description };
		case 'CHANGE_PRIORITY': if (state.id !== action.id) { return state }
							return { ...state, priority: action.priority };
		case 'CHANGE_PLANE_TIME': if (state.id !== action.id) { return state }
							return { ...state, planeTime: action.planeTime };
		case 'CHANGE_DONE_TIME': if (state.id !== action.id) { return state }
							return { ...state, doneTime: action.doneTime };
		default: return state;
	}
};

export const returnNowTime = ()=>{
	let hour = new Date().getHours(); if (hour.toString().length !== 2) { hour = "0"+hour.toString() }
	let minute = new Date().getMinutes(); if (minute.toString().length !== 2) { minute = "0"+ minute.toString()}
	let month = (new Date().getMonth()+1); if (month.toString().length !== 2 ) { month = "0"+ month.toString()}
	let nowTime = 
		new Date().getFullYear() + '-' +
		month + '-' +
		new Date().getDate()+'T'+
		hour+':'+
		minute;
	return nowTime
}

const timeNow = (state = returnNowTime(), action) => {
	switch (action.type){
		case 'CHANGE_TIME_NOW': return action.newTime;
		default: return state;
	}
}

const todoApp = combineReducers({ todos, timeNow })

export default todoApp;