import React, { Component } from 'react'

export default class SoreStart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starjsx: []
    }
  }
  componentWillMount() {
    let starjsx = this.renderScore()
    this.setState({
      starjsx: starjsx
    })
  }
  //一共5颗星
  renderScore = () => {
    let temp = this.props.score || 0
    let s = temp.toString()
    let StarArray = s.split('.')
    // 判断是否是整数,是的话数组第二项+0
    if (StarArray.length === 1) {
      StarArray.push('0')
    }
    // 满星
    let fullStarScore = parseInt(StarArray[0])
    // 半星四舍五入
    let halfStarScore = parseInt(StarArray[1]) >= 5 ? 1 : 0
    // 空星
    let noneStar = 5 - fullStarScore - halfStarScore
    // 渲染数组
    let starjsx = []
    if (fullStarScore) {
      for (let i = 0; i < fullStarScore; i++) {
        starjsx.push(
          <img key={i + 'full'} src="./static/img/fullstar.png" alt="图片" />
        )
      }
    }
    if (halfStarScore) {
      for (let i = 0; i < halfStarScore; i++) {
        starjsx.push(
          <img key={i + 'half'} src="./static/img/halfstar.png" alt="图片" />
        )
      }
    }

    if (noneStar) {
      for (let i = 0; i < noneStar; i++) {
        starjsx.push(
          <img key={i + 'none'} src="./static/img/gray-star.png" alt="图片" />
        )
      }
    }

    return starjsx
  }
  render() {
    return (
      <div className="score-container">
        {this.state.starjsx && this.state.starjsx}
      </div>
    )
  }
}
