import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeType } from './../actions/tabAction'
import { Link, withRouter } from 'react-router-dom'
class BottomBar extends Component {
  renderItems = () => {
    let tabs = this.props.tabs
    return tabs.map(item => {
      let cls = item.key + ' btn-item'
      if (this.props.activeKey === item.key) {
        cls += ' active'
      }
      return (
        <Link
          key={item.key}
          className={cls}
          onClick={() => this.props.handleClick(item.key)}
          replace={true}
          to={'/' + item.key}
        >
          <div className="tab-icon" />
          <div className="btn-name">{item.name}</div>
        </Link>
      )
    })
  }
  render() {
    return <div className="bottom-bar">{this.renderItems()}</div>
  }
}
const mapStateToProps = state => ({
  tabs: state.tabReducers.tabs,
  activeKey: state.tabReducers.activeKey
})
const mapDispathToProps = dispatch => ({
  handleClick: key => dispatch(changeType(key))
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps
  )(BottomBar)
)
