import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/usersActions";

class UserSearch extends Component {

	render() {
		return (
			<div>
				
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
	return {
		state: state
	}
}

const UserSearchConnected = connect(mapStateToProps, mapDispatchToProps)(UserSearch);

export default UserSearchConnected