import React, { Component } from 'react'

export default class ContactTab extends Component {
  state = {
    picture: this.props.contact.picture,
    firstName: this.props.contact.firstname,
    lastName: this.props.contact.lastname
  }
  render() {
    return (
      <div className="contact-tab">
        <div className="contact-head" style={{ "backgroundImage": `url(${this.state.picture})` }}></div>
        {this.state.firstName}
      </div>
    )
  }
}
