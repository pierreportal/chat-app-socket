import React, { Component } from 'react'

export default class MessagePost extends Component {
  state = {
    user: this.props.user,
    content: this.props.content.content,
    by: this.props.by
  }
  render() {

    let style = ''
    this.state.by._id === this.state.user._id ?
      style = 'chat-bubble-me'
      :
      style = 'chat-bubble'
    return (
      <div className={`${style}-row`}>
        <div className={style}>
          <div className='chat-bubble-head'>
            <div className='contact-head' style={{ 'backgroundImage': `url(${this.state.by.picture})` }}></div>
            <span className='chat-by'>{this.state.by.firstname}</span>
          </div>

          <p>{this.state.content}</p>

        </div>
      </div >
    )
  }
}
