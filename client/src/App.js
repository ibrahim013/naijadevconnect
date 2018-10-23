import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import authCheck from "./utilities/authCheck";
import { setUser } from "./actions/authAction";
import isEmpty from "./validator/is-empty";
import store from "./store";
import LandingPage from "./component/layout/Landing";
import Navbar from "./component/layout/Navbar";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Dashboard from "./component/dashboard/Dashboard";
import PrivateRoute from "./component/common/PrivateRoute";
import CreateProfile from "./component/CreateProfile";
import EditProfile from "./component/EditProfile";
import AddExperience from "./component/AddExperience";
import AddEducation from "./component/AddEducation";
import Profiles from "./component/profile/Profiles";
import Profile from "./component/profile/Profile";

if (!isEmpty(authCheck())) {
  store.dispatch(setUser(authCheck()));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div>
              <Switch>
                <Route exact path="/" component={LandingPage} />
              </Switch>
            </div>

            <div>
              <Navbar />
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/createprofile" component={CreateProfile} />
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/profile/:handle" component={Profile} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
            </div>
            {/* <Route exact path="/login" component={Login} /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
