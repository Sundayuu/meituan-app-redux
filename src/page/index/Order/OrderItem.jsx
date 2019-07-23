import React, { Component } from 'react'
import { connect } from 'react-redux'

class OrderItem extends Component {
  render() {
    const item = this.props.item
    return (
      <div className="order-item">
        <div className="order-item-title">
          <div className="order-item-name">{item.poi_name}</div>
          <div className="order-status">{item.status_description}</div>
        </div>
        <div className="order-content">
          <img src={item.poi_pic} alt="" />
          <div className="order-content-detail">
            {item.product_list &&
              item.product_list.map((item, index) => {
                return (
                  <div className="pruduct-item" key={index}>
                    <div>{item.product_name}</div>
                    <div>X{item.product_count}</div>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="order-bottom">
          <div className="comment">再来一单</div>
          {item.status_description == '订单完成' && (
            <div className="comment">评价</div>
          )}
        </div>
      </div>
    )
  }
}
export default connect(null)(OrderItem)
