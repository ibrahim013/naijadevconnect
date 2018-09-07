import React, { Component } from "react";
import Form from "../common/Form";
import { connect } from "react-redux";
import { userLogin } from "../../actions/authAction";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: {}
    };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    const userData = {email: this.state.email, password: this.state.password}
    event.preventDefault();
    this.props.userLogin(userData)
  };

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
    if(nextProps.errors){
      this.setState({
        error: nextProps.errors
      })
    }

  }
  render() {
    const { error, email, password } = this.state;
    return (
      <div className="container-fluid register">
        <div className="registration-form">
          <div className="form-side">
            <h5>DevConnect</h5>
            <p className="l-side-message">Log in</p>
            <p className="side-message-2">
              Having trouble signing in? Retrieve your{" "}
              <Link to="/">username or reset your password</Link>.
            </p>
          </div>
          <div className="form-main">
            <Form
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="email"
              error={error.email}
              glyphicon="fas fa-envelope icon"
              label="email"
            />
            <Form
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              error={error.password}
              placeholder="password"
              glyphicon="fas fa-key icon"
              label="password"
            />
            <div className="submit" onClick={this.onSubmit}>
              Log in
            </div>
          </div>
        </div>
        <div className="footer-content">
          Don't have a DevConnect account?
          <Link to="/register"> sign up </Link>
          instead.
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { userLogin }
)(Login);
