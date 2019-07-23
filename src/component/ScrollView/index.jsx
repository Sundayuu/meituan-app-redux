import React, { Component } from 'react'

export default class ScrollView extends Component {
  constructor(props) {
    super(props)
  }
  onPageLoad = () => {
    //获取屏幕高度
    let clientheight = document.documentElement.clientHeight
    // 获取网页高度
    let scrollHeight = document.body.scrollHeight
    // 获取卷曲高度
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop
    // 距离底部30px 开始加载
    let pageLoadHeight = 30
    if (scrollHeight - clientheight - scrollTop <= pageLoadHeight) {
      // 这里应该注意节流
      this.props.loadCallBack && this.props.loadCallBack()
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onPageLoad)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onPageLoad)
  }
  render() {
    return <div>{this.props.children}</div>
  }
}
