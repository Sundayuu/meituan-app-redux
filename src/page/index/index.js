import React from 'react'
import ReactDom from 'react-dom'
import Main from './Main/Container'
import store from './store'
import { Provider } from 'react-redux'
import '@static/rem'
import '@static/scss/index'
import axios from 'axios'

let baseURL = 'https://easy-mock.com/mock/5d149a43be0f214e354e4fc9/todolist'
axios.defaults.baseURL = baseURL
axios.interceptors.response.use(res => {
  return res.data
})

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
