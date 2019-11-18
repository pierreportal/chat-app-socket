import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
  state = {
    username: ""
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = e => {
    e.preventDefault()
    axios.post('auth/login', { username: this.state.username }).then(response => {
      console.log(response.data)
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
