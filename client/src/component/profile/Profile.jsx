import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingleProfile } from '../../actions/profileAction';
import PropTypes from 'prop-types'

class Profile extends Component {
  componentDidMount(){
    if(this.props.match.params.handle){
      this.props.getSingleProfile(this.props.match.params.handle)
    }
  }
  render() {
    return (
      <div>
        <h1>this is my single profile</h1>
      </div>
    )
  }
}
Profile.propTypes = {
profile: PropTypes.object.isRequired,
getSingleProfile: PropTypes.func.isRequired
}
const mapStateToProps =(state) => ({
  profile: state.profile
})
export default connect(mapStateToProps, {getSingleProfile})(Profile);