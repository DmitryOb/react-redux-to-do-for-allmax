import React, {Component} from 'react';
import styles from '../styles.css';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends Component {
	componentDidMount(){
		const { id, value } = this.props;
		document.getElementById(id).querySelectorAll('input').forEach(e => {
				if (e.value === value) {e.checked=true}
			}
		)
	}
	render(){
		const { id, onChange } = this.props;
		return(
			<td width="200">
				<form
					id={id}
					className={styles.formRadio}
					onChange={(e)=>onChange(id, e.target.value)}
				>
					<label><input type="radio" name="importance" value="normal" />Normal</label>
					<label><input type="radio" name="importance" value="middle" />Middle</label>
					<label><input type="radio" name="importance" value="high" />High</label>
				</form>
			</td>
		)
	}
}

const mapStateToProps = (state ) => { 
	return {

	}
}

Form = connect(mapStateToProps, actions)(Form);

export default Form;