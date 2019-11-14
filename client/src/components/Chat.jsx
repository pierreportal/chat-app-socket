import React, { Component } from 'react'
import ChatForm from './elements/ChatForm'
import MessagePost from './elements/MessagePost'
import axios from 'axios'
import { animateScroll } from "react-scroll";

export default class Chat extends Component {
  state = {
    user: this.props.user,
    to: this.props.partner,
    messageHistory: []
  }
  componentDidMount = () => {
    axios.get('/chat/messages').then(response => {
      this.setState({ messageHistory: response.data })
    }).catch(err => console.log(err))

    this.scrollToBottom();
    // axios get messages between (by & to)
    // this.setState({messageHistory: response.data})
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "ContainerElementID"
    });
  }
  postMessage = message => {
    axios.post('/chat/messages', { by: this.state.user, to: this.state.to, message: message }).then(response => {
      console.log(response.data)
    }).catch(err => console.log(err))
  }
  render() {

    const messageHistory = this.state.messageHistory.map(x => {
      return <li key={x._id}> <MessagePost user={this.state.user} by={x.by} to={this.state.to} content={x} /></li>
    })
    return (
      <div className="chat-area">

        <div className="chat-history">
          <ul>
            {messageHistory}
          </ul>
        </div>

        <ChatForm postMessage={this.postMessage} user={this.state.user} />
      </div>
    )
  }
}
