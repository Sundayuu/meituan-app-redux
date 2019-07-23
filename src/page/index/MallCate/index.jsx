import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showFooter, changeType } from '@actions/tabAction'
import { changeFilter } from '@actions/cateAction'
import { Head } from 'component'
import FilterHead from './filter'
import StoreList from './storeList'
class Cate extends Component {
  componentDidMount() {
    this.props.showFooter(false)
  }
  componentWillUnmount() {
    this.props.showFooter(true)
  }
  render() {
    return (
      <div>
        <Head
          renderLeft={() => {
            this.props.handleClick('home')
            this.props.history.replace('/home')
            let ele = document.getElementsByTagName('body')
            ele[0].className = ''
            this.props.changeFilter({
              activeKey: '',
              closePanel: true
            })
          }}
          text="分类"
        />
        <FilterHead />
        <StoreList />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  handleClick: key => dispatch(changeType(key)),
  showFooter: v => dispatch(showFooter(v)),
  changeFilter: v => dispatch(changeFilter(v))
})

export default connect(
  null,
  mapDispatchToProps
)(Cate)
