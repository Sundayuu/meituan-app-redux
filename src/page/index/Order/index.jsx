import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Head, ScrollView } from 'component'
import OrderItem from './OrderItem'
import { getOrderList } from '@actions/orderAction'
class Order extends Component {
  componentDidMount() {
    this.props.getOrderData()
  }
  render() {
    return (
      <div className="order">
        <Head
          renderLeft={() => {
            this.props.history.push('/home')
          }}
          text="订单"
        />
        <ScrollView loadCallBack={this.props.getOrderData}>
          <div className="content-wrap">
            {this.props.orderItems.map(item => {
              return <OrderItem item={item} key={item.hash_id} />
            })}
          </div>
        </ScrollView>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  orderItems: state.orderReducers.orderItems
})
const mapDispatchToProps = dispatch => ({
  getOrderData: () => dispatch(getOrderList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
