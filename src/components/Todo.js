import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Form from './Form';

class Todo extends Component {

	render(){
		const { toggleTodo, changeName, changeDescription, changePriority, deleteItem, changePlaneTime, changeDoneTime } = this.props;
		const { id, name, description, completed, priority, planeTime, doneTime, timeNow } = this.props;
		let overdue = false;
		if (planeTime && doneTime && doneTime>planeTime && timeNow>planeTime) overdue = true;
		if (timeNow>planeTime) overdue = true;
		return(
			<tr className={(overdue ? 'overdue': '') || (completed ? 'completed' : '')}>

				<td width="200">
					<input 
						type="checkbox" 
						onChange={()=>toggleTodo(id)}
						checked={completed}
					/>
				</td>

				<td width="200">
					<input type="text" 
						onChange={(e)=>changeName(id, e.target.value)}
						value={name}
					/>
				</td>

				<td width="200">
					<input type="text" 
						onChange={(e)=>changeDescription(id, e.target.value)}
						value={description}
					/>
				</td>

				<Form
					id={id}
					onChange={(id, val)=>changePriority(id, val)}
					value={priority}
				/>


				<td width="200">
					<input type="datetime-local" 
						name=""
						value={planeTime}
						onChange={(e)=>changePlaneTime(id, e.target.value)}
					/>
				</td>

				<td width="200">
					<input type="datetime-local" 
						name=""
						value={doneTime}
						onChange={(e)=>changeDoneTime(id, e.target.value)}
					/>
				</td>

				<td width="200">
					<button onClick={()=>deleteItem(id)}>
						Delete
					</button>
				</td>

			</tr>
		)
	}
}

const mapStateToProps = (state ) => { 
	return {
		timeNow : state.timeNow,
	}
}
Todo = connect(mapStateToProps, actions)(Todo);

export default Todo;