import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


class Profile extends React.Component {
  render() {

    const { firstName, lastName, email } = this.props

    return (
      <div>
        <div>
          Profile
          {firstName}
        </div>
        <div>
          {lastName}
        </div>
        <div>
          {email}
        </div>
      </div>
    )
  }
}

export default Profile