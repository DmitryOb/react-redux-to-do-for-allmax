import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisibleTodoList from './VisibleTodoList';
import * as actions from '../actions';
import { returnNowTime } from '../reducers';

class App extends Component {

	componentDidMount(){
		const { changeTimeNow } = this.props;
		setInterval(()=> changeTimeNow(returnNowTime()), 1000);
	}

	render(){
		const { addEmptyTodo, todos } = this.props;
		return(
			<div>
				<button onClick={ () => addEmptyTodo() }>
					Добавить дело
				</button>
				<table width="100%" cellSpacing="0" cellPadding="4" border="1">
					<VisibleTodoList todos={todos}/>
				</table>
			</div>
		)
	}

}

const getVisibleTodos = (todos, filter) => {
	switch (filter){
		case 'all': return todos
		case 'high': return todos.filter(t => t.priority === 'high')
		case 'middle': return todos.filter(t => t.priority === 'middle')
		case 'normal': return todos.filter(t => t.priority === 'normal')
		default: return todos
	}
}

const mapStateToProps = (state, { match:{params} } ) => {
	const filter = params.filter || 'all';
	return {
		todos: getVisibleTodos(state.todos, filter),
		filter
	}
}

App = connect(mapStateToProps, actions)(App);

export default App;