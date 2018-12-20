import { userActionsConst } from '../actions/userActions'

const initialState = {
  isLogin: true,
  //Cờ đã đăng nhập hay chưa
  alreadyLogin: false,
  sequence: 0,
}

export default (state = initialState, { type, isLogin, alreadyLogin, profile }) => {
  //console.log('isLogin', isLogin)
  switch (type) {
    case userActionsConst.CHANGE_SIGNUP:
      return {
        ...state,
        isLogin
      }
    case userActionsConst.LOGIN:
      return alreadyLogin ? {
        ...state,
        alreadyLogin
      }:initialState
    case userActionsConst.LOGIN_DONE:
      return {
        ...state,
        ...profile,
        joinDate:  new Date(profile.joinDate).getTime()
      }
    case userActionsConst.INCREASE_SEQUENCE:
      return {
        ...state,
        sequence: state.sequence + 1,
      }
    default:
      return state
  }
}
