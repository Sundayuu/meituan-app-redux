import { combineReducers } from 'redux'
import tabReducers from './tabReducers'
import homeReducer from './homeReducer'
import cateReducer from './cateReducers'
const reducers = combineReducers({
  tabReducers,
  homeReducer,
  cateReducer
})

export default reducers
