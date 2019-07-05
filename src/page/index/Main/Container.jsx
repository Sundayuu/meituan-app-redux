import React, { Component } from 'react'
import Main from './Main'
import { hot } from 'react-hot-loader'
class Container extends Component {
  // 热模块替换
  render() {
    return <Main />
  }
}
export default hot(module)(Container)
