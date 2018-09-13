import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormInputTextGroup from "./common/FormInputTextField";
import FormSelectGroup from "./common/FormSelectGroup";
import FormTextAreaGroup from "./common/FormTextAreaGroup";
import FormSocialInput from "./common/FormSocialInput";

export default class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      displaySocialInput: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      gitHubUserName: "",
      bio: "",
      skills: "",
      twitter: "",
      facebook: "",
      instagram: "",
      youtube: "",
      linkedin: "",
      error: {}
    };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleToggle = ()=> {
    this.setState(prevState => ({
      displaySocialInput: !prevState.displaySocialInput
    }))
  }
  render() {
    const {
      error,
      handle,
      company,
      location,
      skills,
      gitHubUserName,
      bio,
      displaySocialInput,
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

    let socialInputs;
    if(displaySocialInput){
      socialInputs = (
        <div>
          <FormSocialInput
          icon="fab fa-facebook-f"
          placeholder='Facebook'
          name='facebook'
          value={facebook}
          onChange={this.onChange}
          />
           <FormSocialInput
          icon="fab fa-linkedin-in"
          placeholder='Linkedin'
          name='linkedin'
          value={linkedin}
          onChange={this.onChange}
          />
           <FormSocialInput
          icon="fab fa-twitter"
          placeholder='twitter'
          name='twitter'
          value={twitter}
          onChange={this.onChange}
          />
           <FormSocialInput
          icon="fab fa-instagram"
          placeholder='Instagram'
          name='instagram'
          value={instagram}
          onChange={this.onChange}
          />
           <FormSocialInput
          icon="fab fa-youtube"
          placeholder='youtube'
          name='youtube'
          value={youtube}
          onChange={this.onChange}
          />
        </div>
      )
    }
    return (
      <div className="container-fluid register">
        <div className="profile-form">
          <div className="form-fl-side">
            <h5>DevConnect</h5>
            <p>Create your profile</p>
            <p>Lets get some information to get your profile stand out</p>
          </div>
          <div className="form-l-side">
            <FormInputTextGroup
              name="handle"
              value={handle}
              error={error.handle}
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
              error={error.status}
              info="Give us idea of where you are in your career"
            />
            <FormInputTextGroup
              name="company"
              value={company}
              error={error.company}
              onChange={this.onChange}
              placeholder="*company"
              info="* could be you own company or one you work for"
            />
            <FormInputTextGroup
              name="location"
              value={location}
              error={error.location}
              onChange={this.onChange}
              placeholder="location"
              info="city or state suggested(Lagos,LOS)"
            />
            <FormInputTextGroup
              name="skills"
              value={skills}
              error={error.skills}
              onChange={this.onChange}
              placeholder="*skills"
              info="*please you comma sepprated values eg(html,css,javascript,python)"
            />
            <FormInputTextGroup
              name="githubusername"
              value={gitHubUserName}
              error={error.gitHubUserName}
              onChange={this.onChange}
              placeholder="Github UserName"
              info="if you want latest repo and a Github link, include your username"
            />
          </div>
          <div className="form-r-side" >
          <FormTextAreaGroup
            name="bio"
            placeholder="bio"
            value={bio}
            error={error.bio}
            onChange={this.onChange}
            info="Tell us little about your self"
          />
          <div className="social-button" onClick={this.handleToggle}>Add Social Links</div>
          <div>
            {socialInputs}
          </div>
          </div>
        </div>
      </div>
    );
  }
}
