import { userActionsConst } from '../actions/userActions';
import _ from 'lodash';

const initialState = {
  isLogin: true,
  //Cờ đã đăng nhập hay chưa
  alreadyLogin: false,
  name: '',
  address: '',
  sequence: 0,
  balance: 0,
  bandwith: 0,
  bandwithTime: 0,
  followings: [],
  follower: [],
  picture: {},
  paymentHistory: [],
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
        joinDate: new Date(profile.joinDate).getTime()
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
    case userActionsConst.UPDATE_PROFILE_PICTURE_DONE:
      return {
        ...state,
        picture: {
          ...state.picture,
          data: action.pictureBuffer
        }
      }
    case userActionsConst.GET_USER_PROFILE_DONE:
      return {
        ...state,
        ...action.userProfile
      }
    default:
      return state
  }
}
