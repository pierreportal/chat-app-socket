import './App.css';
import React, { Component } from 'react'
// import Sidebar from './components/Sidebar';
// import Chat from './components/Chat'
import MainApp from './components/MainApp'
import Login from './components/Login'

import { Route, Switch } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    label: 'Chat',
    component: MainApp,
  },
  {
    path: '/login',
    exact: true,
    label: 'Login',
    component: Login,
  }
]


export default class App extends Component {
  state = {
    user: this.props.user,
    // partner: null
  }
  // setPartner = partner => { // NOT WORKING
  //   console.log('partner')
  //   this.setState({ partner: partner }, () => console.log(this.state.partner))
  // }

  render() {
    const routing = routes.map(x => {
      return <Route key={x.path} path={x.path} exact={x.exact} render={() => <x.component user={this.state.user} />} />
    })

    return (
      <div>
        {/* <Sidebar user={this.state.user} setPartner={() => this.setPartner} />
        <Chat user={this.state.user} partner={this.state.partner} /> */}
        <Switch>
          {routing}
        </Switch>
      </div>
    )
  }
}
