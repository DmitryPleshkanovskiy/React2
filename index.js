import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import Users from './components/users.js'
import User from './components/user.js'
import UserList from './components/userlist.js'
import Hello from './components/hello.js'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Users} />
            <Route path="hello" component={Hello} />
        </Route>
    </Router>)
    , document.getElementById('root')
)
