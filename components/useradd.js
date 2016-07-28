import React, { Component } from 'react'

class UserAdd extends Component {

	constructor(props) {
		super(props)
		this.addNewUser = this.addNewUser.bind(this);
	} 

	addNewUser() {
		if (document.getElementById('newUserInput').value) {
			let user = {
				userName: document.getElementById('newUserInput').value,
				userId: this.props.index
			}
			this.props.addUser(user)
		}
		
	}

	render() {

		return (

			<div className="input-group">
				<input id="newUserInput" className="form-control" type="text" placeholder="New Username"></input>
				<span className="input-group-btn">
					<input className="btn btn-default" type="button" value="Add" onClick={this.addNewUser}></input>
				</span>
			</div>
		)
	}
}

export default UserAdd