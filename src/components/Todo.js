import React, {Component} from 'react';
import styles from '../styles.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Form from './Form';

class Todo extends Component {
	render(){
		const { id, toggleTodo, changeName, changeDescription, changePriority, deleteItem, changePlaneTime, changeDoneTime } = this.props;
		const { name, description, completed, priority, planeTime, doneTime } = this.props
		return(
			<tr>

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

				<td className={styles.noborder} width="200">
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

	}
}

Todo = connect(mapStateToProps, actions)(Todo);

export default Todo;