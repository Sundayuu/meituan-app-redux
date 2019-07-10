import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHeaderData } from '@actions/homeAction'
class Category extends Component {
  componentDidMount() {
    this.props.dispatch(getHeaderData())
  }
  renderItem = () => {
    return this.props.cateItems.slice(0, 8).map(item => {
      return (
        <div key={item.code} className="cate-item">
          <img src={item.url} alt="logo图片" />
          <p>{item.name}</p>
        </div>
      )
    })
  }
  render() {
    return <div className="cate-container">{this.renderItem()}</div>
  }
}
const mapStateToProps = state => ({
  cateItems: state.homeReducer.items
})

export default connect(mapStateToProps)(Category)
