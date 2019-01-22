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
        photoUrl: 'https://pbs.twimg.com/profile_images/716722371638509568/WxiAbc-5_400x400.jpg',
        email: 'correo@correo.com',
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
