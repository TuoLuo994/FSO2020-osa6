const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.string
    default:
      return state
  }
}

export const changeFilter = (string) => {
  return {
    type: 'SET_FILTER',
    string
  }
} 

export default filterReducer