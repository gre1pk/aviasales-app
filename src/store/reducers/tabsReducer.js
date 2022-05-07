const defaultState = {
  ticketSort: 'cheap',
}

function tabsReducer(state = defaultState, action = {}) {
  if (action.type === 'SELECT_SORT') {
    return {
      ...state,
      ticketSort: action.payload,
    }
  }
  return state
}

export default tabsReducer
