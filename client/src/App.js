import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import authCheck from './utilities/authCheck';
import {setUser} from './actions/authAction';
import isEmpty from './validator/is-empty';


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
