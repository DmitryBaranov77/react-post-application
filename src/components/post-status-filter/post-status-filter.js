import React from 'react';
import { Button } from 'react-bootstrap';
import './post-status-filter.css'

export default class PostStatusFilter extends React.Component{
	buttons = [
		{name: 'all', label: 'Все'},
		{name: 'like', label: 'Понравилось'}
	]

	render(){
		const buttons = this.buttons.map(({name, label}) => {
			const{filter, onFilterSelect} = this.props;
			const active = filter === name;
			return (
				<Button 
					active={active} 
					key={name} 
					variant='outline-secondary' 
					onClick={() => onFilterSelect(name)}
				>{label}
				</Button>
			)
		})

		return (
			<div className="btn-group">
				{buttons}
			</div>
		)
	}
	
}