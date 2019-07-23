import { GET_ORDERLIST } from './actionTypes'
import axios from 'axios'

export const getOrderList = () => async dispatch => {
  const { data } = await axios.get('/order/list')
  dispatch({
    type: GET_ORDERLIST,
    data: data.digestlist
  })
}
