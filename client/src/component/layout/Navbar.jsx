import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authAction";

class Navbar extends Component {
  onLogout = (event) => {
    event.preventDefault()
    this.props.logoutUser();
    window.location.href ='/login'
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const userLink = (
      <ul className="navbar-nav ml-auto">
        {" "}
        <li className="nav-item">
          <Link to="/profiles" className="nav-link">
            Dashboard
          </Link>
        </li>
        
        <li className="u-nav-item dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <img src={user.avatar} alt={user.user} className="avatar"/>
         <span className="d-user">{user.user}</span>
          </a>
          <div className="dropdown-menu">
          <a className="dropdown-item" onClick={this.onLogout} href="">Logout</a>
          <Link to="/register" className="dropdown-item">
            Profile
          </Link>
          </div>
        </li>
      </ul>
    );
    const guestLink = (
      <ul className="navbar-nav ml-auto">
        {" "}
        <li className="nav-item g-nav-item">
          <Link to="/profiles" className="nav-link">
            Developers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login &rArr;
          </Link>
        </li>
      </ul>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link to="/" className="navbar-brand">
            DevConnect
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobileView"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobileView">
            {isAuthenticated ? userLink : guestLink}
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
