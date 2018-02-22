import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Todo from './Todo';
import PriorityFilter from './PriorityFilter';
import * as actions from '../actions';

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
					<td width="200"></td>
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
	}
}

VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList));

export default VisibleTodoList;