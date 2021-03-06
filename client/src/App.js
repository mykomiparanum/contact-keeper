import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/auth/Register'

import ContactState from './context/contact/ContactState'
import './App.css'
import AuthState from './context/auth/AuthState'
import Login from './components/auth/Login'
import AlertState from './context/alert/AlertState'
import Alerts from './components/layout/Alerts'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/routing/PrivateRoute'
import Welcome from './components/pages/Welcome'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <Fragment>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alerts />
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/welcome" component={Welcome} />
              <PrivateRoute exact path="/contacts" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    </Fragment>
  )
}

export default App
