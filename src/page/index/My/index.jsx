import React, { Component } from 'react'
import { connect } from 'react-redux'
class My extends Component {
  render() {
    return <div>我的</div>
  }
}

export default connect(null)(My)
