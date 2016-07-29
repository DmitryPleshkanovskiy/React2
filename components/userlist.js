import React, { Component } from 'react'
import User from './user.js'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/usersActions";

class UserList extends Component {

	render() {
		return (
			<div className="user-list">
				{console.log(this.props.users)}
				{this.props.users.map((user, i) => {
					return(<User key={user.userId} user={user}></User>)
				})}
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

const UserListConnected = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListConnected