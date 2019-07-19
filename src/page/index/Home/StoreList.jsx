import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCateList } from '@actions/homeAction'
import { ScoreStart, StoreItem } from 'component'

class StoreList extends Component {
  componentDidMount() {
    this.props.dispatch(getCateList(this.props.pageNum, 10))
  }
  renderStoreHeader = () => {
    return (
      <div className="store-head">
        <span className="store-line" />
        <span className="store-name">附近商家</span>
        <span className="store-line" />
      </div>
    )
  }
  render() {
    return (
      <div className="store-list">
        {this.renderStoreHeader()}
        <StoreItem storeList={this.props.storeList.poilist} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  storeList: state.homeReducer.storeList,
  pageNum: state.homeReducer.pageNum
})

export default connect(mapStateToProps)(StoreList)
