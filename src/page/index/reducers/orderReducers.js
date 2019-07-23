import { GET_ORDERLIST } from '@actions/actionTypes'
const initialState = {
  orderItems: []
}
const getOrderData = (state, action) => {
  return {
    ...state,
    orderItems: action.data
  }
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERLIST:
      return getOrderData(state, action)
    default:
      return state
  }
}
export default orderReducer
