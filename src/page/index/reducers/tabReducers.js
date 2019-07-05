import { CHANGE_TAB } from '../actions/actionTypes'
import { TABKEY } from '../config'
const initState = {
  tabs: [
    {
      name: '首页',
      key: TABKEY.home
    },
    {
      name: '订单',
      key: TABKEY.order
    },
    {
      name: '我的',
      key: TABKEY.my
    }
  ],
  activeKey: TABKEY.home
}
const changeType = (state, action) => {
  return {
    ...state,
    activeKey: action.activeKey
  }
}

const tabReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return changeType(state, action)
    default:
      return state
  }
}
export default tabReducer
