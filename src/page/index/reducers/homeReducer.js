import { HEAD_DATA, CATE_LIST } from '../actions/actionTypes'

const initialState = {
  items: [],
  storeList: [],
  pageNum: 0,
  pageSize: 10
}
const gategory = (state, action) => {
  return {
    ...state,
    items: action.data
  }
}
const getStoreList = (state, action) => {
  return {
    ...state,
    storeList: action.data,
    pageNum: state.pageNum + 1
  }
}
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEAD_DATA:
      return gategory(state, action)
    case CATE_LIST:
      return getStoreList(state, action)
    default:
      return state
  }
}
export default homeReducer
