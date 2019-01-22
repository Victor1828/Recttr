import React, { Component } from 'react'

import InputText from '../InputText'
import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      messages: [{
        text: 'Mensaje de prueba',
        picture: 'https://du-cdn.multiscreensite.com/duda_website/img/social/fb_1.jpg',
        displayName: 'Victor Vega',
        username: 'victorvega',
        date: Date.now()
      },
      {
        text: 'Mensaje de prueba 2',
        picture: 'https://du-cdn.multiscreensite.com/duda_website/img/social/fb_1.jpg',
        displayName: 'Victor Vega',
        username: 'victorvega',
        date: Date.now() - 600000
      }],
      onOpenText: false
    }
  }

  handleOpenText(event) {
    event.preventDefault()
    this.setState.onOpenText = true
  }

  renderOpenText() {
    if (this.state.onOpenText) {
      return <InputText />
    }
  }

  render () {
    return (
      <div>
        <ProfileBar 
          picture={this.props.user.photoUrl}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main
