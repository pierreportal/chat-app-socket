import React, { Component } from 'react'
import ChatForm from './elements/ChatForm'
import MessagePost from './elements/MessagePost'

export default class Chat extends Component {
  state = {
    by: this.props.user,
    to: this.props.partner,
    messageHistory: []
  }
  componentDidMount = () => {
    // axios get messages between (by & to)
    // this.setState({messageHistory: response.data})
  }
  postMessage = message => {
    // axios post message {this.state, message}
  }
  render() {
    const messageHistory = this.state.messageHistory.map(x => {
      return <MessagePost key={x._id} by={this.state.by} to={this.state.to} content={x} />
    })
    return (
      <div className="chat-area">

        <div className="chat-history">
          {messageHistory}
        </div>

        <ChatForm postMessage={this.postMessage} />
      </div>
    )
  }
}
