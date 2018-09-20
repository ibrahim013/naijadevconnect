import React, { Component } from "react";
import { connect } from "react-redux";
import { currentUserProfile } from "../../actions/profileAction";
import { deleteAccount } from "../../actions/authAction";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import ProfileAction from "./ProfileAction";
import Experience from "./Experience";
import Education from "./Education";
class Dashboard extends Component {
  componentDidMount() {
    this.props.currentUserProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.profile.experience !== prevProps.profile.experienc || this.props.profile.education !== prevProps.profile.education ) {
      this.props.currentUserProfile();
    }
  }
  onDelete = event => {
    event.preventDefault();
    this.props.deleteAccount();
  };
  render() {
    const { user } = this.props.auth;
    const { profile, isLoading } = this.props.profile;

    let dashboardContent;
    if (profile === null || isLoading) {
      return (dashboardContent = <Spinner />);
    }
    if (Object.keys(profile).length > 0) {
      return (dashboardContent = (
        <div>
          <p>
            Welcome{" "}
            <Link to={`/my-profile/${profile.handle}`}>{user.user}</Link>
          </p>
          <ProfileAction />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div>
            <button className="btn btn-danger" onClick={this.onDelete}>
              Delete My Account
            </button>
          </div>
        </div>
      ));
    }
    dashboardContent = (
      <div>
        welcome {user.user} you are yet to create your profile
        <Link to="/createprofile" className="btn btn-info">
          Create Profile
        </Link>
      </div>
    );

    return <div>{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  currentUserProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { currentUserProfile, deleteAccount }
)(Dashboard);
