import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

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
      <div className="hero">
        <div className="content">
          <div className="content-text">
            <h1>
              Create a developer profile/portfolio, share post and get help from
              other developers.
            </h1>
          </div>
          <div className="content-form">
            <div className="f-button">
              <a href="#" className="btn">
                Facebook
              </a>
            </div>
            <div className="g-button">
              <a href="#" className="btn">
                Google
              </a>
            </div>
            <div className="l-button">
              <a href="#" className="btn">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(LandingPage);
