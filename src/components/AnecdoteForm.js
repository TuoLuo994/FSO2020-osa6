import React from 'react'
import { createItem } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

  const addItem = async (event) => {
    event.preventDefault()
    const content = event.target.item.value
    event.target.item.value = ''
    props.createItem(content)
    props.notificationChange(`you added '${content}'`, 5)
  }

  return(
    <form onSubmit={addItem}>
      <div><input name='item' /></div>
      <button>create</button>
  </form>
  )
}


const ConnectedNotes = connect(
  null,
  {
    createItem,
    notificationChange
  }
)(AnecdoteForm)

export default ConnectedNotes