import { userActionsConst } from '../actions/userActions';
import _ from 'lodash';

const initialState = {
  isLogin: true,
  //Cờ đã đăng nhập hay chưa
  alreadyLogin: false,
  sequence: 0,
  followings: []
}

export default (state = initialState, action) => {
  let { type, isLogin, alreadyLogin, profile } = action;
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
    case userActionsConst.FOLLOW_DONE: {
      return {
          ...state,
          sequence: state.sequence + 1,
          followings: [...state.followings, action.address]
        }
      }
    case userActionsConst.UNFOLLOW_DONE: {
      let followings = _.cloneDeep(state.followings);
      _.remove(followings, follow => follow === action.address);
      return {
          ...state,
          sequence: state.sequence + 1,
          followings
        }
      }
    case userActionsConst.FOLLOW_FALSE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      return state
  }
}
