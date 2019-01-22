import React, { Component } from 'react'

import styles from './message_list.css'
import Message from '../Message'

class MessageList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className={styles.root}>
        {this.props.messages.map((msg, i) => {
          return (
            <Message
              key={i}
              text={msg.text}
              picture={msg.picture}
              displayName={msg.displayName}
              username={msg.username}
              date={msg.date}
            />
          )
        })}
      </div>
    )
  }
}

export default MessageList
