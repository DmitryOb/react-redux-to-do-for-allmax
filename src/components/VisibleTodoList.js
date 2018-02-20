import React, { Component } from 'react';
import Todo from './Todo';
import * as actions from '../actions';
import { connect } from 'react-redux';
import PriorityFilter from './PriorityFilter';
import { withRouter } from 'react-router';

class VisibleTodoList extends Component {
	render(){
		const { todos } = this.props;
		return(
			<tbody>
				<tr className="heading">
					<td width="200"></td>
					<td width="200">Название</td>
					<td width="200">Описание</td>
					<td width="200"><PriorityFilter/></td>
					<td width="200">Срок выполнения</td>
					<td width="200">Выполнено</td>
				</tr>
				{todos.map(todo=> (
						<Todo key={todo.id}{...todo}/>
					))}
			</tbody>
		)
	}
}

const mapStateToProps = (state, { match:{params} } ) => {
	const filter = params.filter || 'all';
	return {
		filter
		//todos: (state.todos)
	}
}


// const getVisibleTodos = (todos, filter) => {
// 	switch (filter){
// 		case 'all': return todos
// 		case 'high': return todos.filter(t => t.priority == 'high')
// 		case 'middle': return todos.filter(t => t.priority == 'middle')
// 		case 'normal': return todos.filter(t => t.priority == 'normal')
// 		default: return todos
// 	}
// }

VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList));

export default VisibleTodoList;