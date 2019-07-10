import { HEAD_DATA, CATE_LIST } from './actionTypes'
import axios from 'axios'
export const getHeaderData = () => async dispatch => {
  let res = await axios({
    method: 'get',
    url: '/head/category'
  })
  dispatch({
    type: HEAD_DATA,
    data: res.data.primary_filter
  })
}
export const getCateList = (pageNum, pageSize) => async dispatch => {
  let res = await axios({
    method: 'post',
    url: '/store/list',
    data: {
      pageNum,
      pageSize
    }
  })
  dispatch({
    type: CATE_LIST,
    data: res.data
  })
}
