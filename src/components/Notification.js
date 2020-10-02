import React from 'react'
import { connect } from 'react-redux'

const Notifications = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (props.notification.show){
    return (
      <div style={style}>
        {props.notification.message}
      </div>
    )
  }
  return(
    <div></div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    message: state.message,
    show: state.show,
  }
}

const ConnectedNotifications = connect(mapStateToProps)(Notifications)

export default ConnectedNotifications