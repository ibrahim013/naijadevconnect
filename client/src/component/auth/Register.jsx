import React, { Component } from "react";
import FormFieldTextGroup from "../common/FormFieldTextGroup";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

import { registerUser } from "../../actions/authAction";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.registerUser(this.state, this.props.history);
  };
  render() {
    const { name, email, password, confirmPassword, errors } = this.state;
    return (
      <div>
        <div className="registration-form">
          <div className="side-message">
            <p>Create your account</p>
          </div>
          <div className="R-form-main">
            <FormFieldTextGroup
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
              placeholder="Account Name"
              glyphicon="fas fa-user icon"
              label="Account name"
              className={classNames("R-form-data", {
                "is-invalid": errors.name
              })}
              error={errors.name}
              cLabel="R-form-label"
            />
            <FormFieldTextGroup
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="email"
              glyphicon="fas fa-envelope icon"
              label="email"
              className={classNames("R-form-data", {
                "is-invalid": errors.email
              })}
              error={errors.email}
              cLabel="R-form-label"
            />
            <FormFieldTextGroup
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              placeholder="password"
              glyphicon="fas fa-key icon"
              label="password"
              className={classNames("R-form-data", {
                "is-invalid": errors.password
              })}
              error={errors.password}
              cLabel="R-form-label"
            />
            <FormFieldTextGroup
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.onChange}
              placeholder="confirm password"
              glyphicon="fas fa-unlock-alt icon"
              label="confirm password"
              className={classNames("R-form-data", {
                "is-invalid": errors.confirmPassword
              })}
              error={errors.confirmPassword}
              cLabel="R-form-label"
            />
            <div className="submit" onClick={this.onSubmit}>
              Create account
            </div>
          </div>
          <footer className="footer-content">
            Already have an account with us?
            <Link to="/">&nbsp; Login &nbsp; </Link>
            instead.
          </footer>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
