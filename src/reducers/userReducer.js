import { userActionsConst } from '../actions/userActions'

const initialState = {
  isLogin: true,
}

export default (state = initialState, { type, isLogin }) => {
    console.log('isLogin', isLogin)
  switch (type) {
    case userActionsConst.CHANGE_SIGNUP:
      return {
        isLogin
      }
    default:
      return state
  }
}
