import React, { Component } from 'react'
import UserList from './userlist.js'
import UserAdd from './useradd.js'

class Users extends Component {

	constructor() {
		super();
		this.state = {
			index: 0,
			users: []
		}
		this.addUser = this.addUser.bind(this);
		this.removeUser = this.removeUser.bind(this);
	}

	addUser(user) {
		console.log(user);
		let updatedUsers = this.state.users;
		updatedUsers.push(user);

		this.setState({
			index: ++this.state.index,
			users: updatedUsers
		})
	}

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
	}

	render() {
		return (
			<div>
				<UserAdd addUser={this.addUser} index={this.state.index}/>
				<UserList users={this.state.users} removeUser={this.removeUser}/>
			</div>
		)
	}
}

export default Users