const initialState = {
	users: [],
	index: 0
}

export default function userReducer(state=initialState, action) {
	switch (action.type) {
		case 'ADD_USER': {
			console.log('Add user');
			let updatedUsers = state.users;
			updatedUsers.push(action.user);

			return Object.assign({}, state, {
				users: updatedUsers,
				index: ++state.index
			});

		}
		default: {
			return state;
		}
	}
}