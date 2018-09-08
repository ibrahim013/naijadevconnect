import React, { Component } from 'react'
import {connect} from 'react-redux'
import {currentUserProfile} from '../actions/profileAction';

 class Dashboard extends Component {
   componentDidMount(){
     this.props.currentUserProfile();
   }
  render() {
    return (
      <div>
          <h1>this is a dashboard</h1>
      </div>
    )
  }
}
export default connect(null, {currentUserProfile})(Dashboard);
