import React, { Component } from 'react'
import User from './user.js'

class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: this.props.users
		}
	}

	render() {
		return (
			<div className="user-list">
				{this.state.users.map((user, i) => {
					return(<User user={user} removeUser={this.props.removeUser} key={user.userId}></User>)
				})}
			</div>
		)
	}
}

export default UserList