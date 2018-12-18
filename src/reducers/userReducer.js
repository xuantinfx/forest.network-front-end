import { userActionsConst } from '../actions/userActions'

const initialState = {
  isLogin: true,
  //Cờ đã đăng nhập hay chưa
  alreadyLogin: false
}

export default (state = initialState, { type, isLogin, alreadyLogin }) => {
  //console.log('isLogin', isLogin)
  switch (type) {
    case userActionsConst.CHANGE_SIGNUP:
      return {
        ...state,
        isLogin
      }
    case userActionsConst.LOGIN:
      return {
        ...state,
        alreadyLogin
      }
    default:
      return state
  }
}
