import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validator/is-empty";
import { Link } from "react-router-dom";

class ProfileItems extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3 mt-3 ">
          <div className="row">
            <div className="col-2">
              <img src={profile.user.avatar} className="rounded-circle" />
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{profile.user.name}</h3>
              <p>
                {profile.status}
                {isEmpty(profile.company) ? null : (
                  <span> at {profile.company}</span>
                )}
              </p>
              <p>
                {isEmpty(profile.location) ? null : (
                  <span>{profile.location}</span>
                )}
              </p>
              <Link to={`/profile/${profile.handle}`} className="btn btn-info">
                View Profile
              </Link>
            </div>
            <div className="col-lg-3 col-md-2 col-2">
              <ul className="list-group">
                <li className="list-group-item disabled">
                  <h3>Skills</h3>
                </li>
                {profile.skills.slice(0, 4).map((skill, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      <i className="fas fa-check" />
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItems.propTypes = {
  profile: PropTypes.object.isRequired
};
export default ProfileItems;
