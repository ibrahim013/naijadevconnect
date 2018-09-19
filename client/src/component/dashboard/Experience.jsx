import React, { Component } from "react";
import Moment from 'react-moment'


class Experience extends Component {
  render() {
    const experience = this.props.experience.map(exp => {
      return (
        <tr key={exp._id}>
          <td>{exp.company}</td>
          <td>{exp.title}</td>
          <td>
            <Moment format="YYYY/MM/DD">{exp.from}</Moment>-
            <Moment format="YYYY/MM/DD">{exp.to ? exp.to : Date.now()}</Moment>
          </td>
          <td>
            <button className="btn btn-danger m-4">delete</button>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{experience}</tbody>
        </table>
      </div>
    );
  }
}
export default Experience;
