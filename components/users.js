import React, { Component } from 'react'
import UserList from './userlist.js'
import UserAdd from './useradd.js'
import UserSearch from './usersearch.js'

class Users extends Component {

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