import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormInputTextField from "./common/FormInputTextField";
import FormFieldTextGroup from "./common/FormFieldTextGroup";
import FormTextAreaGroup from './common/FormTextAreaGroup'
import {newExp} from "./../actions/profileAction"

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      location: "",
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
  addExp = (event) => {
    event.preventDefault()
    this.props.newExp(this.state)
  }
  render() {
    const { errors, company, title, location, from, to, description, current } = this.state;
    return (
      <div className="container-fluid register">
        <div className="profile-form">
          <div className="form-fl-side">
            <h5>DevConnect</h5>
            <p className="side-message-p">Add Experience</p>
            <p className="side-message-2">
              Add any job or position that you have had in the past or current
            </p>
          </div>
          <div className="form-l-side">
            <FormInputTextField
              name="company"
              value={company}
              error={errors.company}
              onChange={this.onChange}
              placeholder="*company"
            />
              <FormInputTextField
              name="title"
              value={title}
              error={errors.title}
              onChange={this.onChange}
              placeholder="* Job Title"
            />
            <FormInputTextField
              name="location"
              value={location}
              error={errors.location}
              onChange={this.onChange}
              placeholder="location"
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
            <div onClick={this.addExp}>Add Experience</div>
          </div>
          
        </div>
      </div>
    );
  }
}

AddExperience.proptypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  newExp: PropTypes.func.isRequired
};
const mapstateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapstateToProps,
  {newExp}
)(AddExperience);
