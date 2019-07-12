import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Bottombar from './../BottomBar/Bottom'
import Home from '../Home'
import Cate from '../MallCate'
import Order from '../Order'
import My from '../My'
class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route component={Home} exact path="/home" />
            <Route component={Cate} path="/cate" />
            <Route component={Order} path="/order" />
            <Route component={My} path="/my" />
          </Switch>
          {this.props.showFooter ? <Bottombar /> : null}
        </Router>
      </div>
    )
  }
}

export default connect(state => ({
  showFooter: state.tabReducers.isshow
}))(Main)
