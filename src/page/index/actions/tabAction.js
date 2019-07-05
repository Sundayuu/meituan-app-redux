import { CHANGE_TAB } from './actionTypes'

export const changeType = activeKey => {
  return {
    type: CHANGE_TAB,
    activeKey: activeKey
  }
}
