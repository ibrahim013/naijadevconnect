import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormInputTextGroup from "./common/FormInputTextField";
import FormSelectGroup from "./common/FormSelectGroup";
import FormTextAreaGroup from "./common/FormTextAreaGroup";
import FormSocialInput from "./common/FormSocialInput";
import { newUserProfile, currentUserProfile } from "../actions/profileAction";
import Spinner from "./common/Spinner";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      githubusername: "",
      bio: "",
      skills: "",
      twitter: "",
      facebook: "",
      instagram: "",
      youtube: "",
      linkedin: "",
      errors: {}
    };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault;
    this.props.newUserProfile(this.state, this.props.history);
  };
  componentDidMount() {
    this.props.currentUserProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  render() {
    const { profile, isLoading } = this.props.profile;
    let dashboardContent;

    if (profile === null || isLoading) {
      return (dashboardContent = <Spinner />);
    }
    if (Object.keys(profile).length > 0) {
      return (dashboardContent = <Redirect to="/dashboard" />);
    }
    const {
      errors,
      handle,
      company,
      location,
      skills,
      githubusername,
      bio,
      facebook,
      linkedin,
      instagram,
      twitter,
      youtube
    } = this.state;
    const options = [
      { label: "* Select Professional Status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manage" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Others", value: "Others" }
    ];

    return (
      <div>
        {!!dashboardContent ? (
          dashboardContent
        ) : (
          <div className="profile-form">
            <div className="form-l-side">
              <div className="form-heading">
                <p className="side-message-p">Create your profile</p>
                <p className="side-message-p2">
                  Lets get some information to get your profile stand out
                </p>
              </div>
              <FormInputTextGroup
                name="handle"
                value={handle}
                error={errors.handle}
                onChange={this.onChange}
                placeholder="*handle"
                info="* A unique handle for your profile URL. Your fullname, company name, nickname"
              />
              <FormSelectGroup
                options={options}
                placeholder="Status"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
                error={errors.status}
                info="Give us idea of where you are in your career"
              />
              <FormInputTextGroup
                name="company"
                value={company}
                error={errors.company}
                onChange={this.onChange}
                placeholder="*company"
                info="* could be your own company or one you work for"
              />
              <FormInputTextGroup
                name="location"
                value={location}
                error={errors.location}
                onChange={this.onChange}
                placeholder="location"
                info="city or state suggested(Lagos,LOS)"
              />
              <FormInputTextGroup
                name="skills"
                value={skills}
                error={errors.skills}
                onChange={this.onChange}
                placeholder="*skills"
                info="*please use comma sepprated values eg(html,css,javascript,python)"
              />
              <FormInputTextGroup
                name="githubusername"
                value={githubusername}
                error={errors.githubusername}
                onChange={this.onChange}
                placeholder="Github UserName"
                info="if you want latest repo and a Github link, include your username"
              />
              <FormTextAreaGroup
                name="bio"
                placeholder="brief about you"
                value={bio}
                error={errors.bio}
                onChange={this.onChange}
                info="Tell us little about your self"
              />
              <div className="social-input">
                <p className="info">Add Social Network links (Optional)</p>
                <div>
                  <FormSocialInput
                    icon="fab fa-facebook-f"
                    placeholder="Facebook"
                    name="facebook"
                    value={facebook}
                    onChange={this.onChange}
                    error={errors.facebook}
                  />
                  <FormSocialInput
                    icon="fab fa-linkedin-in"
                    placeholder="Linkedin"
                    name="linkedin"
                    value={linkedin}
                    onChange={this.onChange}
                    error={errors.linkedin}
                  />
                  <FormSocialInput
                    icon="fab fa-twitter"
                    placeholder="twitter"
                    name="twitter"
                    value={twitter}
                    onChange={this.onChange}
                    error={errors.twitter}
                  />
                  <FormSocialInput
                    icon="fab fa-instagram"
                    placeholder="Instagram"
                    name="instagram"
                    value={instagram}
                    onChange={this.onChange}
                    error={errors.instagram}
                  />
                  <FormSocialInput
                    icon="fab fa-youtube"
                    placeholder="youtube"
                    name="youtube"
                    value={youtube}
                    onChange={this.onChange}
                    error={errors.youtube}
                  />
                </div>
              </div>
              <div className="submit dif-space" onClick={this.onSubmit}>
                {isLoading ? "Loading..." : "Create Profile "}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
CreateProfile.proptypes = {
  newUserProfile: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { newUserProfile, currentUserProfile }
)(CreateProfile);
