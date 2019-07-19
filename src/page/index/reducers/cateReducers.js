import { filterCate } from './../config'
import {
  CHANGE_FILTER,
  GET_CATELIST,
  GET_FILTERDATA,
  CHANGE_SORTICON
} from '@actions/actionTypes'
const initState = {
  tabs: [
    {
      key: filterCate.cate,
      text: '全部分类'
    },
    {
      key: filterCate.type,
      text: '综合排序'
    },
    {
      key: filterCate.filter,
      text: '筛选'
    }
  ],
  activeKey: '',
  cateItems: [],
  closePanel: true,
  filterData: [],
  activeSortCode: '',
  activeCateCode: '',
  activeFilterCode: ''
}
const changeTab = (state, action) => {
  return {
    ...state,
    activeKey: action.obj.activeKey,
    closePanel: action.obj.closePanel
  }
}
const getCateData = (state, action) => {
  return {
    ...state,
    cateItems: action.cateItems
  }
}
const getFilterData = (state, action) => {
  return {
    ...state,
    filterData: action.filterData
  }
}
const changeSortType = (state, action) => {
  return {
    ...state,
    [action.activeType]: action.activeCode,
    closePanel: true
  }
}

const cateFilter = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return changeTab(state, action)
    case GET_CATELIST:
      return getCateData(state, action)
    case GET_FILTERDATA:
      return getFilterData(state, action)
    case CHANGE_SORTICON:
      return changeSortType(state, action)
    default:
      return state
  }
}
export default cateFilter
