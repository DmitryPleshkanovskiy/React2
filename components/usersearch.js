import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/usersActions";

class UserSearch extends Component {

	constructor () {
		super()
		this.searchUser = this.searchUser.bind(this);
	}

	searchUser() {
		let query = document.getElementById('searchInput').value;
		this.props.searchUsers(query);
	}

	render() {
		return (
			<div className="input-group">
				<input id="searchInput" className="form-control" type="text" placeholder="Search..." onChange={this.searchUser}></input>
				<span className="input-group-btn">
					<input className="btn btn-default" type="button" value="Search" onClick={this.searchUser}></input>
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
		state: state
	}
}

const UserSearchConnected = connect(mapStateToProps, mapDispatchToProps)(UserSearch);

export default UserSearchConnected