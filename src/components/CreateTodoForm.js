import React, {Component} from 'react';

class CreateTodoForm extends Component {
	state = {
		todo: '',
	}

	onInputChange = (event) => {
		this.setState({
			todo: event.target.value,
		});
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		let todo = this.state.todo;
		this.props.createTodo(todo);
		this.setState({
			todo: '',
		});
	};

	render() {
		return (
			<div style={this.props.style} className='todoForm'>
				<form onSubmit = {this.onFormSubmit} id="taskForm">
					<input
						onChange={this.onInputChange}
						type="text" id="newItemDescription"
						placeholder="Write a todo here"
						value={this.state.todo}
						/>
					<button type="submit" id="addTask" className="btn">Add Todo</button>
				</form>
			</div>
		);
	};
};

export default CreateTodoForm;

