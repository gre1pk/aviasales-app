const defaultState = {
  transfersNot: true,
  transfersOne: true,
  transfersTwo: true,
  transfersThree: true,
}

function filterReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SELECT_ALL':
      return {
        ...state,
        transfersNot: true,
        transfersOne: true,
        transfersTwo: true,
        transfersThree: true,
      }

    case 'SELECT_ALL_OFF':
      return {
        transfersNot: false,
        transfersOne: false,
        transfersTwo: false,
        transfersThree: false,
      }
    case 'SELECT_NOT':
      return {
        ...state,
        transfersNot: !state.transfersNot,
      }
    case 'SELECT_ONE':
      return {
        ...state,
        transfersOne: !state.transfersOne,
      }
    case 'SELECT_TWO':
      return {
        ...state,
        transfersTwo: !state.transfersTwo,
      }

    case 'SELECT_THREE':
      return {
        ...state,
        transfersThree: !state.transfersThree,
      }

    default:
      return state
  }
}

export default filterReducer
