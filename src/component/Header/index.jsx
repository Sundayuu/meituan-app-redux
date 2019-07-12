import React, { Component } from 'react'

export default class Head extends Component {
  render() {
    return (
      <div className="head">
        <img
          src="./static/img/left.png"
          alt=""
          className="head-left"
          onClick={this.props.renderLeft}
        />
        <div className="head-name">分类</div>
        <div className="head-home" />
      </div>
    )
  }
}
