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

		case 'SEARCH_USERS': {
			let updatedUsers = [];
			let regex = new RegExp(action.query, "gi");
			for (let i=0; i<state.users.length; i++) {
				updatedUsers.push(state.users[i]);
				if (updatedUsers[i].userName.match(regex)) {
					updatedUsers[i].show = true;
				} else {
					updatedUsers[i].show = false;
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