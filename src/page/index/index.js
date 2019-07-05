import React from 'react'
import ReactDom from 'react-dom'
import Main from './Main/Container'
import store from './store'
import { Provider } from 'react-redux'
import '@static/rem'
import '@static/scss/index'

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
