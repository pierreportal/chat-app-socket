import React, { Component } from 'react'
import axios from 'axios'
import ContactTab from './elements/ContactTab'

export default class Sidebar extends Component {
  state = {
    search: "",
    user: this.props.user,
    contacts: [],
    // connectedUsers: this.props.connectedUsers
  }
  componentDidMount = () => {
    axios.get('/chat/users').then(response => {
      this.setState({
        contacts: response.data
      })
    })
  }

  handleSearch = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  fastLogin = username => {
    axios.post('auth/login', { username: username }).then(response => {
      // console.log(response.data)

    }).catch(err => console.log(err))
  }

  render() {
    const filteredContacts = this.state.contacts && this.state.contacts.filter(x => x._id !== this.state.user._id && x.firstname.toLowerCase().startsWith(this.state.search.toLowerCase()));

    const contactList = filteredContacts && filteredContacts.map(x => {

      return <li key={x.username} onClick={() => this.fastLogin(x.username)}> <ContactTab contact={x} /*connected={this.state.connectedUsers.includes(x.firstname)}*/ /></li >
    })

    return (
      <div className="sidebar">
        <input type="text" name="search" placeholder="Search contact..." value={this.state.search} onChange={this.handleSearch} />
        <ul>
          {contactList}
        </ul>
      </div>
    )
  }
}
