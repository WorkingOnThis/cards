import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Layout wrappers
import LayoutDashboard from '../components/layouts/Dashboard'
import LayoutMain from '../components/layouts/Main'

// Views
import About from '../views/main/About'
import Home from '../views/main/Home'
import Login from '../views/main/Login'

// Dashboard Views
import Settings from '../views/dashboard/Settings'
import Dashboard from '../views/dashboard/Home'


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
