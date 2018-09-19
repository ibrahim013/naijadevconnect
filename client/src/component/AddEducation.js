import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import FormInputTextField from "./common/FormInputTextField";
import FormFieldTextGroup from "./common/FormFieldTextGroup";
import FormTextAreaGroup from './common/FormTextAreaGroup'
import {newEducation} from "./../actions/profileAction"

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      fieldofstudy: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }
  onCheck = ()=>{
    this.setState(prevState=>({
      disabled: !prevState.disabled,
      current: !prevState.current
    }))
  }
  addEducation = (event) => {
    event.preventDefault()
    this.props.newEducation(this.state, this.props.history)
  }
  render() {
    const { errors, school, degree, fieldofstudy, from, to, description, current } = this.state;
    return (
      <div className="container-fluid register">
        <div className="profile-form">
          <div className="form-fl-side">
            <h5>DevConnect</h5>
            <p className="side-message-p">Add Education</p>
            <p className="side-message-2">
              Add any school that you have been in the past or current
            </p>
          </div>
          <div className="form-l-side">
            <FormInputTextField
              name="school"
              value={school}
              error={errors.school}
              onChange={this.onChange}
              placeholder="* school"
            />
              <FormInputTextField
              name="degree"
              value={degree}
              error={errors.degree}
              onChange={this.onChange}
              placeholder="* Degree"
            />
            <FormInputTextField
              name="fieldofstudy"
              value={fieldofstudy}
              error={errors.fieldofstudy}
              onChange={this.onChange}
              placeholder="Field of study"
            />
            <FormFieldTextGroup
              name="from"
              type="date"
              value={from}
              error={errors.from}
              onChange={this.onChange}
              label="From"
            />
            <FormFieldTextGroup
              name="to"
              type="date"
              value={to}
              error={errors.to}
              onChange={this.onChange}
              label="To"
              disabled={this.state.disabled ? 'disabled': ''}
            />
            <FormFieldTextGroup
            name="current"
            type="checkbox"
            id='checkbox'
            onChange={this.onCheck}
            label="Current Job"
            />
            <FormTextAreaGroup
              name="description"
              value={description}
              error={errors.description}
              onChange={this.onChange}
              placeholder="tell us about the position"
            />
            <div onClick={this.addEducation}>Add Education</div>
          </div>
          
        </div>
      </div>
    );
  }
}

AddEducation.proptypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  newEducation: PropTypes.func.isRequired
};
const mapstateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapstateToProps,
  {newEducation}
)(withRouter(AddEducation));
