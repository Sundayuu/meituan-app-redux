import { filterCate } from './../config'
import { CHANGE_FILTER, GET_CATELIST } from '@actions/actionTypes'
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
  cateItems: []
}
const changeTab = (state, action) => {
  return {
    ...state,
    activeKey: action.activeKey
  }
}
const getCateData = (state, action) => {
  return {
    ...state,
    cateItems: action.cateItems
  }
}

const cateFilter = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return changeTab(state, action)
    case GET_CATELIST:
      return getCateData(state, action)
    default:
      return state
  }
}
export default cateFilter
