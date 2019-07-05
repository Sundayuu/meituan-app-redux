import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bottombar from './../BottomBar/Bottom'
import Home from '../Home'
class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Home />
        <Bottombar />
      </div>
    )
  }
}

export default connect(null)(Main)
