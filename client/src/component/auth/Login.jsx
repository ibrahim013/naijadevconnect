import React, { Component } from "react";
import FormFieldTextGroup from "../common/FormFieldTextGroup";
import { connect } from "react-redux";
import { userLogin } from "../../actions/authAction";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";


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
    const userData = { email: this.state.email, password: this.state.password };
    event.preventDefault();
    this.props.userLogin(userData, this.props.history);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({
        error: nextProps.errors
      });
    }
  }
  render() {
    const { error, email, password } = this.state;
    return (
      <div className="form-main">
          <FormFieldTextGroup
            type="email"
            name="email"
            value={email}
            onChange={this.onChange}
            placeholder="email"
            error={error.email}
            glyphicon="fas fa-envelope icon"
            label="email"
            className={classNames("form-data", {
              "is-invalid": error.email
            })}
            cLabel="form-label"
          />
        
          <FormFieldTextGroup
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
            error={error.password}
            placeholder="password"
            glyphicon="fas fa-key icon"
            label="password"
            className={classNames("form-data", {
              "is-invalid": error.password
            })}
            cLabel="form-label"
          />
          <div className="submit" onClick={this.onSubmit}>
            <p>Log in</p>
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
)(withRouter(Login));
