import './App.css';
import React, { Component } from 'react'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'

export default class App extends Component {
  state = {
    user: this.props.user,
    partner: null
  }
  setPartner = partner => {
    this.setState({ partner })
  }
  render() {
    return (
      <div id="app">
        <Sidebar user={this.state.user} setPartner={() => this.setPartner} />
        <Chat user={this.state.user} partner={this.state.partner} />
      </div>
    )
  }
}
