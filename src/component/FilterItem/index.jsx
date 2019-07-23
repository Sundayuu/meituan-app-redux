import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSortIcon, getCateData } from '@actions/cateAction'
class FilterItem extends Component {
  render() {
    let cateData = this.props.cateData
    let subFilterData = this.props.cateData.sub_category_list
    let filterType = this.props.filterType

    return (
      <div className={'cate-item'}>
        <p className="cate-item-title">{cateData.name}</p>
        <div className="cate-item-content">
          {subFilterData && subFilterData.length > 0
            ? subFilterData.map(item => {
                return (
                  <div
                    className={
                      this.props[filterType] !== '' &&
                      this.props[filterType] == item.code
                        ? 'cate-box active'
                        : 'cate-box'
                      // 'cate-box active'
                    }
                    key={item.code}
                    onClick={() => {
                      let ele = document.getElementsByTagName('body')
                      this.props.changeSortIcon({
                        activeType: filterType,
                        activeCode: item.code
                      })
                      ele[0].className = ''
                      this.props.getData()
                    }}
                  >
                    {`${item.name}`} {item.quantity && `(${item.quantity})`}
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
  activeCateCode: state.cateReducer.activeCateCode,
  activeActivityCode: state.cateReducer.activeActivityCode
})
const mapDispatchToProps = dispatch => ({
  changeSortIcon: code => dispatch(changeSortIcon(code)),
  getData: () => dispatch(getCateData())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterItem)
