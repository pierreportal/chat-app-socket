import React, { Component } from 'react'

export default class ChatForm extends Component {
  state = {
    message: ""
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postMessage(this.state.massage)
  }

  render() {
    return (
      <div>

        <form className="chat-form" onSubmit={this.handleSubmit}>
          <input type="text" name="message" placeholder="Type your message here..." value={this.state.message} onChange={this.handleChange} />
          <button type="submit">send</button>
        </form>
      </div>
    )
  }
}
