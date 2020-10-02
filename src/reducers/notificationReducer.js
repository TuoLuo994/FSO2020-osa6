const defaultState = {
  message: 'hello world',
  show: false
}

const notificationReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return {
        message: action.message,
        show: true
      }
    case 'HIDE_NOTIFICATION':
      return {
        message: state.message,
        show: false
      }
    default:
      return state
  }
}

export const notificationChange = (message, time) => {
  const timeToWait = time*1000

  const setup = dispatch => {
    console.log(dispatch.timeoutID)
    if (typeof dispatch.timeoutID === 'number') {
      cancel(dispatch);
    }

    dispatch({
      type:'SET_NOTIFICATION',
      message
    })
    dispatch.timeoutID = setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, timeToWait)
  }

  const cancel = dispatch => {
    clearTimeout(dispatch.timeoutID);
  }

  return dispatch => {
    setup(dispatch)
  }
}


export default notificationReducer