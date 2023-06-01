import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './helpers/history';
import AuthLayout from './layout/layout';

import Home from './modules/home/home'

const PrivateRoute = ({ component: Component, path }) => {
  return (
    <Route
      exact
      path={path}
      render={props =>
        <AuthLayout>
          <Component {...props} />
        </AuthLayout>
      }
    />
  )
}

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path='/' exact component={Home} />
        <PrivateRoute path='/home' exact component={Home} />
      </Switch>
    </Router>
  )
}
