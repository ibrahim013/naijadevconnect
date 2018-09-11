import React, { Component } from 'react'
import {connect} from 'react-redux'
import {currentUserProfile} from '../actions/profileAction';
import PropTypes from 'prop-types';
import Spinner from './common/Spinner'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
   componentDidMount(){
     this.props.currentUserProfile();
   }
  render() {
    const {user} = this.props.auth.user
    const {profile, isLoading} = this.props.profile;

    let dashboardContent;
    if(profile === null || isLoading){
      return dashboardContent = <Spinner/>
    }
    if(Object.keys(profile).length > 0){
      return dashboardContent = (<h4>this is a profile page</h4>)
      }
      dashboardContent = (
        <div>
          welcome {user} you are yet to create your profile 
          <Link to='/createprofile' className="btn btn-info">Create Profile</Link>
        </div>
      )

    return (
      <div>
          {dashboardContent}
      </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
})
export default connect(mapStateToProps, {currentUserProfile})(Dashboard);
