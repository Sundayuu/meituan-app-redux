import { CHANGE_TAB, ISSHOW_FOOTER } from '../actions/actionTypes'
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
      name: '分类',
      key: TABKEY.cate
    },
    {
      name: '我的',
      key: TABKEY.my
    }
  ],
  activeKey: TABKEY.home,
  isshow: true // 是否显示底部
}
const changeType = (state, action) => {
  return {
    ...state,
    activeKey: action.activeKey
  }
}
const isShowFooter = (state, action) => {
  return {
    ...state,
    isshow: action.showFooter
  }
}

const tabReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return changeType(state, action)
    case ISSHOW_FOOTER:
      return isShowFooter(state, action)
    default:
      return state
  }
}
export default tabReducer
