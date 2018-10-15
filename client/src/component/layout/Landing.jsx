import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Login from "../auth/Login";
import OAuth from '../common/OAuth';

class LandingPage extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="contain">
        <div className="hero">
          <div className="content">
            <ul className="content-text">
              <li>
                <span className="grp-icon">
                  <i className="fas fa-toolbox" />
                </span>{" "}
                Create a developer profile/portfolio
              </li>
              <li>
                <span className="grp-icon">
                  <i className="fas fa-comments" />
                </span>
                Start conversation
              </li>
              <li>
                <span className="grp-icon">
                  <i className="fas fa-hands-helping" />
                </span>
                Get help from other developers.
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-side">
        <div className="top-link">
        <Link to="/profiles" className="nav-link">
            Developers
          </Link>
        </div>
          <div>
            <Login />
          </div>
          <div className="pwf">
            <Link to="/">Forgot Password</Link>
          </div>
          <div className="diffrence">
            <p>Differentiate yourself from the crowd</p>
            <div>
              <strong>Join Devlink today</strong>
              <hr/>
             <OAuth/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(LandingPage);
