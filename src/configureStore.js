import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers';


const configureStore = () => {

	const persistedState = () => {
		try {
			if (localStorage.getItem('state') === null) { return undefined; }
			return JSON.parse(localStorage.getItem('state'));
		} catch (err) {
			return undefined;
		}
	};
	const store = createStore(todoApp, persistedState());

	if(process.env.NODE_ENV !== 'production'){
		store.dispatch = addLoggingToDispatch(store);
	};
	
	store.subscribe(
		throttle( () => {
			try {
				localStorage.setItem( 'state', JSON.stringify( store.getState() ) )
			} catch (err) {
				console.log(err)
			}
		}, 1000 )
	);

	return store;
}

const addLoggingToDispatch = (store) => {
	const rawDispatch = store.dispatch;
	if (!console.group){ return rawDispatch; }
	return (action) => {
		console.group(action.type);
		console.log('%c prev state', 'color: gray', store.getState());
		console.log('%c action', 'color: blue',action);
		const returnValue = rawDispatch(action);
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	};
};

export default configureStore;