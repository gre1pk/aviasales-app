const defaultState = {
  // all: true,
  transfersNot: true,
  transfersOne: true,
  transfersTwo: true,
  transfersThree: true,
}

function filterReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SELECT_ALL':
      return {
        // all: true,
        transfersNot: true,
        transfersOne: true,
        transfersTwo: true,
        transfersThree: true,
      }
    case 'SELECT_NOT':
      return {
        ...state,
        // all: Object.values(state).every((e) => e === true),
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
