import React, { Component } from 'react'
import Header from './Header'
import CateGory from './Category'
import StoreList from './StoreList'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <CateGory />
        <StoreList />
      </div>
    )
  }
}
