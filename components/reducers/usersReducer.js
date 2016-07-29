const initialState = {
	users: [],
	index: 0
}

export default function userReducer(state=initialState, action) {
	switch (action.type) {
		case 'ADD_USER': {
			let updatedUsers = state.users.slice(); //get copy of array
			updatedUsers.push(action.user);

			return Object.assign({}, state, {
				users: updatedUsers,
				index: ++state.index
			});
		}

		case 'REMOVE_USER': {
			let updatedUsers = state.users.slice(); //get copy of array

			for (let i=0; i<updatedUsers.length; i++) {
				if (updatedUsers[i].userId == action.userId) {
					updatedUsers.splice(i, 1);
					break;
				}
			}	

			return Object.assign({}, state, {
				users: updatedUsers
			});
		}

		default: {
			return state;
		}
	}
}