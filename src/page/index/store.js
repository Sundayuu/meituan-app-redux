import { createStore, applyMiddleware, compose } from 'redux'
import mainReducer from './reducers/index'
import thunk from 'redux-thunk'
const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
if (module.hot) {
  // store 热模块替换
  module.hot.accept('./reducers/index', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
