import React, { Component } from 'react'
import ChatForm from './elements/ChatForm'
import MessagePost from './elements/MessagePost'
import axios from 'axios'

import socketIOClient from "socket.io-client";
let socket;

export default class Chat extends Component {
  state = {
    user: this.props.user,
    to: this.props.partner,
    messageHistory: [],
    message: "",

    response: "", // socket io response
    endpoint: "http://localhost:5555", // socket io connection
    actionFeedback: "",
    systemFeedback: ""
  }


  componentDidMount = () => {
    axios.get('/chat/messages').then(response => {
      this.setState({ messageHistory: response.data })
    }).catch(err => console.log(err))

    // ### Socket Client ####

    const { endpoint } = this.state;
    socket = socketIOClient(endpoint);

    socket.on("message", data => {
      const { type, message } = data
      if (type === 'message') {
        this.setState({ response: message })
        axios.get('/chat/messages').then(response => {
          this.setState({ messageHistory: response.data })
        })
      }
      else if (type === 'typing') this.setState({ actionFeedback: message })
      else if (type === 'system') {
        this.setState({ systemFeedback: message })
        this.props.isConnected(message)
      }
    });
    // ########################

    socket.send({ type: 'system', message: `${this.state.user.firstname} is connected.` })
  }

  isTyping = typing => {
    socket.send({ type: 'typing', message: typing })
  }

  postMessage = message => {

    axios.post('/chat/messages', { by: this.state.user, to: this.state.to, message: message }).then(() => {
      socket.send({ type: 'message', message: message })
      socket.send({ type: 'typing', message: null })
    }).catch(err => console.log(err))
    this.setState({
      message: ""
    })
  }

  render() {
    const messageHistory = this.state.messageHistory.map(x => {
      return <li key={x._id}> <MessagePost user={this.state.user} by={x.by} to={this.state.to} content={x} /></li>
    })

    const { actionFeedback } = this.state;
    const { systemFeedback } = this.state;
    systemFeedback.length && setTimeout(() => {
      this.setState({ systemFeedback: "" })
    }, 2000)
    const c = "#ffcccc"


    return (
      <div className="chat-area" style={{ "backgroundColor": `${c}` }}>
        <div className="chat-history">
          <ul>
            {messageHistory}
          </ul>
        </div>
        <p className="action-feedback">{actionFeedback}</p>
        <p className='system'>{systemFeedback}</p>
        <ChatForm postMessage={this.postMessage} user={this.state.user} isConnected={this.props.isConnected} isTyping={this.isTyping} />
      </div>
    )
  }
}


