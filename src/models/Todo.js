const endPoint = `https://super-crud-api.herokuapp.com/api/todos`

class TodoModel {
	static all = () => {
		return fetch(endPoint)
			.then(response => response.json())
			.catch(error => console.log('Could not get all todos \n', error));
	};

	static update = (todo) => {
		return fetch(`${endPoint}/${todo._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(todo)
		})
			.then(response => response.json())
			.catch(error => console.log('Could not update todo \n', error));
	};

	static create = (todo) => {
		return fetch(endPoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(todo)
		})
		.then(response => response.json())
		.catch(error => console.log('Could not post todo \n', error));
	}

	static delete = (todo) => {
		return fetch(`${endPoint}/${todo._id}`, {
			method: "DELETE"
		})
			.then(response => response.json())
			.catch(error => console.log('Could not delete todo \n', error));
	};
};

export default TodoModel;