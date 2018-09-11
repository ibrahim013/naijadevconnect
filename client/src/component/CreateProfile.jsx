import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import FormInputTextGroup from './common/FormInputTextField';

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
    return (
      <div className="container">
        <h3>Create your profile</h3>
        <h5>Lets get some information to get your profile stand out</h5>
        <FormInputTextGroup
        name="handle"
        value={this.state.handle}
        onchange={()=>{}}
        placeholder="handle"
        info="* A unique handle for your profile URL. Your fullname, company name, nickname"
        />
      </div>
    )
  }
}
