import React from 'react';
import { Button } from 'react-bootstrap';
import './post-add-form.css'

export default class PostAddForm extends React.Component {
	state = {
		text: ''
	}

	onValueChange = (e) => {
		this.setState({
			text: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({
			text: ''
		});
	}

	render(){
		return (
			<form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
				<input 
					type="text" 
					placeholder="О чем вы думаете сейчас?" 
					className="form-control new-post-label" 
					onChange={this.onValueChange} 
					value={this.state.text}
				/>
				<Button type="submit" variant="outline-secondary">Добавить</Button>
			</form>
		)
	}

	
}