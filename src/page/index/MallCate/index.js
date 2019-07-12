import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showFooter } from '@actions/tabAction'
import { Head } from 'component'

class Cate extends Component {
  componentDidMount() {
    this.props.dispatch(showFooter(false))
  }
  componentWillUnmount() {
    this.props.dispatch(showFooter(true))
  }
  render() {
    return (
      <div>
        <Head renderLeft={() => {}} />
      </div>
    )
  }
}

export default connect(null)(Cate)
