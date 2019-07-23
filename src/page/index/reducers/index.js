import { combineReducers } from 'redux'
import tabReducers from './tabReducers'
import homeReducer from './homeReducer'
import cateReducer from './cateReducers'
import orderReducers from './orderReducers'
const reducers = combineReducers({
  tabReducers,
  homeReducer,
  cateReducer,
  orderReducers
})

export default reducers
