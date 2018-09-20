import React, { Component } from "react";
import Moment from 'react-moment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {deleteEducation} from "../../actions/profileAction";


class Education extends Component {
  onDelete = (id)=> {
    this.props.deleteEducation(id);
  }
  render() {
    const education = this.props.education.map(edu => {
      return (
        <tr key={edu._id}>
          <td>{edu.school}</td>
          <td>{edu.degree}</td>
          <td>
            <Moment format="YYYY/MM/DD">{edu.from}</Moment>-
            {edu.to ? (<Moment format="YYYY/MM/DD">{edu.to}</Moment>): 'Date'}
          </td>
          <td>
            <button className="btn btn-danger m-4" onClick={()=>this.onDelete(edu._id)}>delete</button>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>degree</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}
Education.propTypes = {
deleteEducation: PropTypes.func.isRequired
}
export default connect(null, {deleteEducation})(withRouter(Education));
