import React from 'react'
import { giveVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const filteredAnecdotes = anecdotes.filter(x => x.content.includes(filter))
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(giveVote(anecdote.id))
    dispatch(notificationChange(`you voted '${anecdote.content}'`, 5))
    

  }
  return(
    <div>
      {filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
        )}
    </div>
  )
}

export default AnecdoteList