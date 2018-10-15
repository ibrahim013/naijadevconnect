import React, { Component } from "react";
import { Link } from "react-router-dom";

class OAuth extends Component {
  render() {
    return (
      <div className="content-form">
        <div className="s-button">
          <Link to="/register" className="btn">
            Signup
          </Link>
        </div>
        <strong>Login with</strong>
        <hr/>
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
    );
  }
}
export default OAuth;
