import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSortIcon, getCateData } from '@actions/cateAction'
class FilterItem extends Component {
  render() {
    let cateData = this.props.cateData
    let subFilterData = this.props.cateData.sub_category_list
    return (
      <div className={'cate-item'}>
        <p className="cate-item-title">{cateData.name}</p>
        <div className="cate-item-content">
          {subFilterData && subFilterData.length > 0
            ? subFilterData.map(item => {
                return (
                  <div
                    className={
                      this.props.activeCateCode !== '' &&
                      this.props.activeCateCode == item.code
                        ? 'cate-box active'
                        : 'cate-box'
                    }
                    key={item.code}
                    onClick={() => {
                      this.props.changeSortIcon({
                        activeType: this.props.filterType,
                        activeCode: item.code
                      })
                      this.props.getData()
                    }}
                  >
                    {`${item.name}(${item.quantity})`}
                  </div>
                )
              })
            : null}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  activeCateCode: state.cateReducer.activeCateCode
})
const mapDispatchToProps = dispatch => ({
  changeSortIcon: code => dispatch(changeSortIcon(code)),
  getData: () => dispatch(getCateData())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterItem)
