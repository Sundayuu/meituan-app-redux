import { CHANGE_TAB, ISSHOW_FOOTER } from './actionTypes'

export const changeType = activeKey => dispatch => {
  dispatch({
    type: CHANGE_TAB,
    activeKey: activeKey
  })
}
export const showFooter = showFooter => dispatch => {
  dispatch({
    type: ISSHOW_FOOTER,
    showFooter: showFooter
  })
}
