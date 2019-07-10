import { combineReducers } from 'redux'
import tabReducers from './tabReducers'
import homeReducer from './homeReducer'
const reducers = combineReducers({
  tabReducers,
  homeReducer
})

export default reducers
