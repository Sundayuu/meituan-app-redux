import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '@actions/cateAction'
class FilterHeader extends Component {
  renderTabs() {
    let tabs = this.props.tabs
    return tabs.map(item => {
      let cls = item.key + ' filter-item'
      if (this.props.activeKey === item.key) {
        cls += ' active'
      }
      return (
        <div
          className={cls}
          key={item.key}
          onClick={() => {
            if (this.props.activeKey === item.key) {
              this.props.changeFilter('')
            } else {
              this.props.changeFilter(item.key)
            }
          }}
        >
          {item.text}
        </div>
      )
    })
  }
  render() {
    return <div className="cate-filter">{this.renderTabs()}</div>
  }
}
const mapStateToProps = state => ({
  tabs: state.cateReducer.tabs,
  activeKey: state.cateReducer.activeKey
})
const mapDispatchToProps = dispatch => ({
  changeFilter: key => dispatch(changeFilter(key))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterHeader)
