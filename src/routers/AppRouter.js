import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Layout wrappers
import LayoutDashboard from '../containers/layouts/Dashboard'
import LayoutMain from '../containers/layouts/Main'

// Views
import About from '../containers/views/main/About'
import Home from '../containers/views/main/Home'
import Login from '../containers/views/main/Login'

// Dashboard Views
import Settings from '../containers/views/dashboard/Settings'
import Dashboard from '../containers/views/dashboard/Home'


export const AppRouter = () => {
  return (
    <Router>
      <Switch>

        <Route
          path="/dashboard"
          render={({ match: { path } }) => (
            <LayoutDashboard>
              <Switch>
                <Route path={`${path}/`} exact component={ Dashboard } />
                <Route path={`${path}/settings`} component={ Settings } />
              </Switch>
            </LayoutDashboard>
          )}
        />

        <Route>
          <LayoutMain>
            <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='/about' component={ About } />
              <Route path='/login' component={ Login } />
            </Switch>
          </LayoutMain>
        </Route>

      </Switch>
    </Router>
  )
}
