export function addUser(user) {
	const action = {
		type: 'ADD_USER',
		user: user
	};
	return action;
}

export function removeUser(id) {
	const action = {
		type: 'REMOVE_USER',
		userId: id
	}
	return action;
}

export function searchUsers(query) {
	const action = {
		type: 'SEARCH_USERS',
		query: query
	}
	return action;
}