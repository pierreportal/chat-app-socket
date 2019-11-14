import React, { Component } from 'react'

export default class ChatForm extends Component {
  state = {
    user: this.props.user,
    message: ""
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postMessage(this.state.message)
    this.setState({
      message: ""
    })
  }

  render() {
    return (
      <div>

        <form className="chat-form" onSubmit={this.handleSubmit}>
          <div className="contact-head" style={{ "backgroundImage": `url(${this.state.user.picture})` }}></div>
          <input type="text" name="message" placeholder="Type your message here..." value={this.state.message} onChange={this.handleChange} />
          <button type="submit">send</button>
        </form>
      </div>
    )
  }
}
