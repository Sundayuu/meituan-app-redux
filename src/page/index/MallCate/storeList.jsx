import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCateData } from '@actions/cateAction'
import { StoreItem } from 'component'
class StoreList extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    console.log(this.props.cateItems)
    return (
      <div className="cate-list">
        <StoreItem storeList={this.props.cateItems} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  cateItems: state.cateReducer.cateItems
})
const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getCateData())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreList)
