import React, { Component } from 'react'

export default class Sidebar extends Component {
  state = {
    search: ""
    // user: this.props.user
    // contacts : []
  }
  componentDidMount = () => {
    // axios > get all Users
  }

  handleSearch = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sidebar">
        <input type="text" name="search" placeholder="Search contact..." value={this.state.search} onChange={this.handleSearch} />
      </div>
    )
  }
}
