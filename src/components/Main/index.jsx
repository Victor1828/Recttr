import React, { Component } from 'react'

import MessageList from '../MessageList'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      messages: [{
        text: 'Mensaje de prueba',
        picture: 'https://pbs.twimg.com/profile_images/716722371638509568/WxiAbc-5_400x400.jpg',
        displayName: 'Victor Vega',
        username: 'victorvega',
        date: Date.now()
      },
      {
        text: 'Mensaje de prueba 2',
        picture: 'https://pbs.twimg.com/profile_images/716722371638509568/WxiAbc-5_400x400.jpg',
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
        {this.renderOpenText}
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main
