import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles.css';

const FilterLink = ({ filter, children }) => (
	<NavLink
		className={styles.link}
		exact
		to={'/'+ (filter === 'all' ? '' : filter) }
		activeStyle={{
			textDecoration: 'none',
			color: 'black',
		}}
	>
		{children}
	</NavLink>
)

export default FilterLink;