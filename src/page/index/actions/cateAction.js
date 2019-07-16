import { CHANGE_FILTER, GET_CATELIST } from './actionTypes'
import axios from 'axios'
export const changeFilter = activeKey => dispatch => {
  dispatch({
    type: CHANGE_FILTER,
    activeKey: activeKey
  })
}
export const getCateData = () => async dispatch => {
  let res = await axios({
    method: 'get',
    url: '/cate/shop/list'
  })
  dispatch({
    type: GET_CATELIST,
    cateItems: res.data.poilist
  })
}
