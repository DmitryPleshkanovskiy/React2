import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/usersActions";

class User extends Component {

	constructor() {
		super();
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
	return {
		state: state
	}
}

const UserConnected = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserConnected