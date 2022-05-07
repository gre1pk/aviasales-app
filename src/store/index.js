import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import tabsReducer from './reducers/tabsReducer'
import filterReducer from './reducers/filterReducer'

const rootReducer = combineReducers({
  tabsReducer,
  filterReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
