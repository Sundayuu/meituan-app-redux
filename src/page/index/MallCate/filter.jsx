import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeFilter,
  getFilterData,
  changeSortIcon
} from '@actions/cateAction'
import { FilterItem } from 'component'

class FilterHeader extends Component {
  componentDidMount() {
    this.props.getFilterData()
  }
  renderTabs() {
    let tabs = this.props.tabs
    return tabs.map(item => {
      let cls = item.key + ' filter-item'
      if (this.props.activeKey === item.key && !this.props.closePanel) {
        cls += ' active'
      }
      return (
        <div
          className={cls}
          key={item.key}
          onClick={() => {
            let ele = document.getElementsByTagName('body')
            let closePanel = false
            // 如果点击的是同一个tab
            if (this.props.activeKey === item.key && !this.props.closePanel) {
              closePanel = true
              ele[0].className = ''
            } else {
              ele[0].className = 'banScroll'
            }

            this.props.changeFilter({
              activeKey: item.key,
              closePanel: closePanel
            })
          }}
        >
          {item.text}
        </div>
      )
    })
  }
  renderFilterContent = () => {
    let tabs = this.props.tabs
    if (!tabs) return null
    return tabs.map(item => {
      let cls = 'item-panel'
      if (item.key === this.props.activeKey) {
        cls += ' current'
      }

      return (
        <div className={cls} key={item.key}>
          {this.props.activeKey === 'cate'
            ? this.renderCateList()
            : this.props.activeKey === 'type'
            ? this.renderSortTypeList()
            : null}
        </div>
      )
    })
  }
  renderSortTypeList = () => {
    let data = this.props.filterData.sort_type_list
    if (!data) return null
    return data.map(item => {
      return (
        <div className="sort-type-content" key={item.code}>
          <div
            className="type-item"
            onClick={() =>
              this.props.changeSortIcon({
                activeType: 'activeSortCode',
                activeCode: item.code
              })
            }
          >
            <img
              src={
                this.props.activeSortCode !== '' &&
                this.props.activeSortCode == item.code
                  ? item.icon_url_click
                  : item.icon_url
              }
              alt="icon"
            />
            <p
              className={
                this.props.activeSortCode !== '' &&
                this.props.activeSortCode == item.code
                  ? 'activeSort'
                  : ''
              }
            >
              {item.name}
            </p>
          </div>
        </div>
      )
    })
  }

  renderCateList = () => {
    let data = this.props.filterData.category_filter_list
    if (!data) return null
    return data.map(item => {
      return (
        <FilterItem
          cateData={item}
          key={item.code}
          filterType={'activeCateCode'}
        />
      )
    })
  }
  render() {
    let cls = 'panel'
    if (!this.props.closePanel) {
      cls += ' show'
    } else {
      cls = 'panel'
    }
    return (
      <div>
        <div className="cate-filter">{this.renderTabs()}</div>
        <div className={cls}>
          <div className="panel-inner">{this.renderFilterContent()}</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  tabs: state.cateReducer.tabs,
  activeKey: state.cateReducer.activeKey,
  closePanel: state.cateReducer.closePanel,
  filterData: state.cateReducer.filterData,
  activeSortCode: state.cateReducer.activeSortCode
})
const mapDispatchToProps = dispatch => ({
  changeFilter: key => dispatch(changeFilter(key)),
  getFilterData: () => dispatch(getFilterData()),
  changeSortIcon: code => dispatch(changeSortIcon(code))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterHeader)
