import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import FormInputTextGroup from './common/FormInputTextField';
import FormSelectGroup from './common/FormSelectGroup';

export default class CreateProfile extends Component {
  constructor(){
    super()
    this.state = {
      displaySocialInput: false,
      handle: '',
      company:'',
      website:'',
      location:'',
      status:'',
      githubuserName: '',
      bio: '',
      skills: '',
      twitter: '',
      facebook: '',
      instagram: '',
      youtube:'',
      linkedin: '',
      error:{}
    }
  }
  render() {
    const {error, handle}= this.state;
    const options = [
      {label: "* Select Professional Status", value: 0},
      {label: "Developer", value: "Developer"},
      {label: "Junior Developer", value: "Junior Developer"},
      {label: "Senior Developer", value:"Senior Developer"},
      {label: "Manager", value: "Manage"},
      {label: "Student or Learning", value: "Student or Learning"},
      {label: "Instructor or Teacher", value: "Instructor or Teacher"},
      {label: "Intern", value: "Intern"},
      {label: "Others", value: "Others"}
    ]
    return (
      <div className="container-fluid register">
        <h3>Create your profile</h3>
          <h5>Lets get some information to get your profile stand out</h5>
        <div className="profile-form">
          <FormInputTextGroup
          name="handle"
          value={handle}
          error={error.handle}
          onchange={()=>{}}
          placeholder="handle"
          info="* A unique handle for your profile URL. Your fullname, company name, nickname"
          />
         <FormSelectGroup
         options ={options}
         placeholder="Status"
         name="status"
         value={this.state.status}
         onChange={()=>{}}
         error={error.status}
         info ="Give us idea of where you are in your career"
         
         />
        </div>
        
      </div>
    )
  }
}
