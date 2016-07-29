const initialState = {
	users: [],
	index: 0
}

export default function userReducer(state=initialState, action) {
	switch (action.type) {
		case 'ADD_USER': {
			console.log('Add user');
		}
		default: {
			return state;
		}
	}
}