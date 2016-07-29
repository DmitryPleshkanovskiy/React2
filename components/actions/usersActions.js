export function addUser(user) {
	const action = {
		type: 'ADD_USER'
	};
	return action;
}

export function removeUser(id) {
	const action = {
		type: 'REMOVE_USER'
	}
	return action;
}

