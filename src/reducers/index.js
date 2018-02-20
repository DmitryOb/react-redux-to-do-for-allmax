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
			doneTime: action.doneTime
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

const priorityFilter = (state = 'all', action) => {
	switch (action.type){
		case 'SET_PRIORITY_FILTER': return action.filter;
		default: return state;
	}
}

const todoApp = combineReducers({ todos, priorityFilter })

export default todoApp;