import React, { Component } from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat'

export default class MainApp extends Component {
  state = {
    user: this.props.user,
    connectedUsers: []
    // partner: null
  }
  isConnected = user => {
    // console.log('FROM MAIN APP:', user);
    const name = user.split(" ")[0]
    this.setState({ connectedUsers: this.state.connectedUsers.concat(name) })
  }
  render() {
    return (
      <div id="app" >
        <Sidebar user={this.state.user} setPartner={() => this.setPartner} connectedUsers={this.state.connectedUsers} />
        <Chat user={this.state.user} partner={this.state.partner} isConnected={this.isConnected} />
      </div >
    )
  }
}
