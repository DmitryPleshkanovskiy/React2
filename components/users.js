import React, { Component } from 'react'
import UserList from './userlist.js'
import UserAdd from './useradd.js'
import UserSearch from './usersearch.js'

class Users extends Component {

	/*
	removeUser(userId) {
		let updatedUsers = this.state.users;
		for (let i=0; i<updatedUsers.length; i++) {
			if (updatedUsers[i].userId == userId) {
				updatedUsers.splice(i, 1);
				break;
			}
		}

		this.setState({
			users: updatedUsers
		})
	}*/

	render() {
		return (
			<div>
				<UserAdd/>
				<UserSearch/>
				<UserList/>
			</div>
		)
	}
}

export default Users