import React, { Component } from 'react'
const uuid4 = require('uuid/v4')

import InputText from '../InputText'
import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      onOpenText: false
    }

    this.handleOpenText = this.handleOpenText.bind(this)
    this.handleSendText = this.handleSendText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
  }

  handleOpenText(event) {
    event.preventDefault()
    this.setState({onOpenText: true})
  }

  handleCloseText(event) {
    event.preventDefault()
    this.setState({onOpenText: false})
  }

  handleSendText(event) {
    event.preventDefault()
    let msg = {
      id: uuid4(),
      text: event.target.text.value,
      picture: this.props.user.photoUrl,
      displayName: this.props.user.displayName,
      username: this.props.user.email.split('@')[0],
      date: Date.now()
    }
    
    this.setState({
      messages: this.state.messages.concat(msg),
      onOpenText: false
    })
  }

  renderOpenText() {
    if (this.state.onOpenText) {
      return (
        <InputText
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
        />
      )
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
