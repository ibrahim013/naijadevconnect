import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import authCheck from './utilities/authCheck';
import {setUser} from './actions/authAction';
import isEmpty from './validator/is-empty';
import store from './store'
import LandingPage from './component/layout/Landing';
import Navbar from './component/layout/Navbar';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Dashboard from './component/dashboard/Dashboard';
import PrivateRoute from './component/common/PrivateRoute';
import CreateProfile from "./component/CreateProfile";

if(!isEmpty(authCheck())){
  store.dispatch(setUser(authCheck()));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/createprofile" component={CreateProfile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Fragment>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
