import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/usersActions";

class UserSearch extends Component {

	render() {
		return (
			<div className="input-group">
				<input id="newUserInput" className="form-control" type="text" placeholder="Search..."></input>
				<span className="input-group-btn">
					<input className="btn btn-default" type="button" value="Search" onClick={this.addNewUser}></input>
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