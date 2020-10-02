import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  console.log(content)
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const giveVote = async (id) => {
  const all = await axios.get(baseUrl)
  const votedItem = all.data.find(n => n.id === id)
  const withAddedVote = {...votedItem, votes:votedItem.votes+1}
  const newAnecdoteArray = all.data.map(item =>
    item.id !== id ? item : withAddedVote
  )
  console.log(newAnecdoteArray)
  const response = await axios.put(`${baseUrl}/${id}`, withAddedVote)
  return response.data
}

export default { 
    getAll,
    createNew,
    giveVote
}