import React, { Component } from 'react'

// import socketIOClient from "socket.io-client";
// let socket;

export default class ChatForm extends Component {
  state = {
    user: this.props.user,
    message: "",
    // response: "",
    // endpoint: "http://localhost:5555",
    // actionFeedback: "",
    // systemFeedback: ""
  }

  componentDidMount = () => {
    // const { endpoint } = this.state;
    // socket = socketIOClient(endpoint);

    // socket.on("message", data => {
    //   const { type, message } = data
    //   if (type === 'message') this.setState({ response: message })
    //   else if (type === 'typing') this.setState({ actionFeedback: message })
    //   else if (type === 'system') {
    //     this.setState({ systemFeedback: message })
    //     this.props.isConnected(message)
    //   }
    // });

    // socket.send({ type: 'system', message: `${this.state.user.firstname} is connected.` })
  }

  handleChange = e => {
    // console.log(this.state.message)
    const { name, value } = e.target
    let typing = value.length ? `${this.state.user.firstname} is typing...` : null
    this.setState({ [name]: value })
    this.props.isTyping(typing)
    // socket.send({ type: 'typing', message: typing })
  }

  handleSubmit = e => {
    e.preventDefault()
    // socket.send({ type: 'message', message: this.state.message })
    // socket.send({ type: 'typing', message: null })
    // console.log('HANDLE SUBMIT:', this.state.message)
    this.props.postMessage(this.state.message)
    // this.setState({
    //   message: ""
    // })
  }

  render() {

    // const { actionFeedback } = this.state;
    // const { systemFeedback } = this.state;
    // systemFeedback.length && setTimeout(() => {
    //   this.setState({ systemFeedback: "" })
    // }, 2000)
    return (
      <div>
        <form className="chat-form" onSubmit={this.handleSubmit}>
          {/* <p>{actionFeedback}</p>
          <p className='system'>{systemFeedback}</p> */}
          <div className="contact-head" style={{ "backgroundImage": `url(${this.state.user.picture})` }}></div>
          <input type="text" name="message" placeholder="Type your message here..." value={this.state.message} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
