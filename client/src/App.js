import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import "./App.css";
import authCheck from './utilities/authCheck';
import {setUser} from './actions/authAction';
import isEmpty from './validator/is-empty';
=======
import { Provider } from 'react-redux'
import "./App.css";
>>>>>>> signup action added
import store from "./store";
import LandingPage from "./component/layout/Landing";
import Navbar from "./component/layout/Navbar";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Dashboard from "./component/Dashboard";



if(!isEmpty(authCheck())){
  store.dispatch(setUser(authCheck()));
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <div>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
