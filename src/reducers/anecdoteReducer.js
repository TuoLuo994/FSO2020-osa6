import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_ITEM':
      return [...state, action.data]
    case 'VOTE':
      const id = action.data
      const votedItem = state.find(n => n.id === id)
      const withAddedVote = {
        ...votedItem,
        votes: votedItem.votes+1
      }
      const newAnecdoteArray = state.map(item =>
        item.id !== id ? item : withAddedVote
      )
      const correctOrder = newAnecdoteArray.sort((a, b) => b.votes - a.votes)
      return correctOrder
    case 'INIT_ITEMS':
      return action.data.sort((a, b) => b.votes - a.votes)
    default:
      return state
  }
}

export const initializeItems = (notes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ITEMS',
      data: anecdotes,
    })
  }
}

export const createItem = (content) => {
  return async dispatch => {
    const newItem = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ITEM',
      data: newItem
    })
  }
}

export const giveVote = (item) => {
  return async dispatch => {
    await anecdoteService.giveVote(item)
    dispatch({
      type: 'VOTE',
      data: item
    })
  }
  // return {
  //   type: 'VOTE',
  //   data: { id }
  // }
}

export default reducer