import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/usersActions";

class UserAdd extends Component {

	constructor() {
		super()
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
	return {
		index: state.index
	}
}

const UserAddConnected = connect(mapStateToProps, mapDispatchToProps)(UserAdd);

export default UserAddConnected