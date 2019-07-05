import { createStore } from 'redux'
import mainReducer from './reducers/main'
const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
if (module.hot) {
  // store 热模块替换
  module.hot.accept('./reducers/main', () => {
    const nextRootReducer = require('./reducers/main').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
