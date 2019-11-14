import React, { Component } from 'react'
import axios from 'axios'
import ContactTab from './elements/ContactTab'

export default class Sidebar extends Component {
  state = {
    search: "",
    user: this.props.user,
    contacts: []
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

  render() {
    const filteredContacts = this.state.contacts && this.state.contacts.filter(x => x.firstname.toLowerCase().startsWith(this.state.search.toLowerCase()));

    const contactList = filteredContacts && filteredContacts.map(x => {
      return <li key={x._id}><ContactTab contact={x} /></li>
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
