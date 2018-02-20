import { v4 } from 'node-uuid';

export const addEmptyTodo = () => ({
	type: 'ADD_EMPTY_TODO',
	id: v4()
});

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
});

export const changeName = (id, name) => ({
	type: 'CHANGE_NAME',
	id,
	name
})

export const changeDescription = (id, description) => ({
	type: 'CHANGE_DESCRIPTION',
	id,
	description
})

export const changePriority = (id, priority) => ({
	type: 'CHANGE_PRIORITY',
	id,
	priority
})

export const deleteItem = (id) => ({
	type: 'DELETE_ITEM',
	id
})

export const changePlaneTime = (id, planeTime) => ({
	type: 'CHANGE_PLANE_TIME',
	id,
	planeTime
})

export const changeDoneTime = (id, doneTime) => ({
	type: 'CHANGE_DONE_TIME',
	id,
	doneTime
})