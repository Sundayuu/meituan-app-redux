import {
  CHANGE_FILTER,
  GET_CATELIST,
  GET_FILTERDATA,
  CHANGE_SORTICON
} from './actionTypes'
import axios from 'axios'
export const changeFilter = obj => dispatch => {
  dispatch({
    type: CHANGE_FILTER,
    obj: obj
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
export const getFilterData = () => async dispatch => {
  let res = await axios({
    method: 'post',
    url: '/filter'
  })
  dispatch({
    type: GET_FILTERDATA,
    filterData: res.data
  })
}
export const changeSortIcon = params => dispatch => {
  dispatch({
    type: CHANGE_SORTICON,
    activeCode: params.activeCode,
    activeType: params.activeType
  })
}
