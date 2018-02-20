import React from 'react';
import FilterLink from './FilterLink';

const PriorityFilter = () => (
	<div>
		<h3>Важность</h3>
		<p>
			{' '}<FilterLink filter='all'>All</FilterLink>
			{' '}<FilterLink filter='high'>High</FilterLink>
			{' '}<FilterLink filter='middle'>Middle</FilterLink>
			{' '}<FilterLink filter='normal'>Normal</FilterLink>
		</p>
	</div>
)

export default PriorityFilter;