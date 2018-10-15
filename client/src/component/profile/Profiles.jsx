import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getProfiles } from "../../actions/profileAction";
import Spinner from "../common/Spinner";
import ProfileItems from "./ProfileItems";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { profiles, isLoading } = this.props.profile;
    let profileItem;
    if (!profiles || isLoading) {
      profileItem = (
        <div>
          <Spinner />
        </div>
      );
    } else if (profiles.length > 0) {
      profileItem = profiles.map(profile => {
        return <ProfileItems key={profile._id} profile={profile} />;
      });
    } else {
      profileItem = <div>No profiles Found....</div>;
    }
    return <div>{profileItem}</div>;
  }
}

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
