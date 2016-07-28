import React, { Component } from 'react'

class User extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user
		}
		this.remove = this.remove.bind(this);
	}

	remove() {
		this.props.removeUser(this.props.user.userId);
	}

	render() {
		return (
			<div>
				<div><b>User:</b> {this.props.user.userName}</div>
				<div>
					<button className="btn btn-danger" onClick={this.remove}>Remove</button>
				</div>
			</div>
		)
	}
}

export default User