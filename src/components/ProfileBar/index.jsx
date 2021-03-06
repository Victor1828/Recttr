import React, { Component } from 'react'

import styles from './profile_bar.css'

class ProfileBar extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <div className={styles.root}>
        <figure>
          <img className={styles.avatar} src={this.props.picture} alt={this.props.username} />
        </figure>
        <span className={styles.username}>Hola @{this.props.username}!</span>
        <button onClick={this.props.onOpenText} className={styles.button}>
          <span className="fa fa-lg fa-edit"></span> Tweet!
        </button>
      </div>
    )
  }
}

export default ProfileBar
