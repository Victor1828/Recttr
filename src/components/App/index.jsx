import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        photoUrl: 'https://du-cdn.multiscreensite.com/duda_website/img/social/fb_1.jpg',
        email: 'correo@correo.com',
        displayName: 'Correo',
        onOpenText: false
      }
    }
  }
  render () {
    return (
      <div>
        <Header />
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App
