import { userActionsConst } from '../actions/userActions';
import _ from 'lodash';
import { getUsedBandwidthByAccount } from '../utilities/bandwidth';

const initialState = {
  isLogin: true,
  //Cờ đã đăng nhập hay chưa
  alreadyLogin: false,
  name: '',
  address: '',
  sequence: 0,
  balance: 0,
  bandwidth: 0,
  bandwidthTime: 0,
  followings: [],
  follower: [],
  picture: {},
  paymentHistory: [],
  error: ""
}

export default (state = initialState, action) => {
  let { type, isLogin, alreadyLogin, profile } = action;
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
        isLogin: true,
        alreadyLogin: true,
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
        followings: [...state.followings, action.address],
        bandwidthTime: (new Date()).getTime()/1000,
        bandwidth: getUsedBandwidthByAccount({
          bandwidthTime: state.bandwidthTime,
          bandwidth: state.bandwidth,
        }, (new Date()).getTime()/1000) + action.txSize
      }
    }
    case userActionsConst.UNFOLLOW_DONE: {
      let followings = _.cloneDeep(state.followings);
      _.remove(followings, follow => follow === action.address);
      return {
        ...state,
        sequence: state.sequence + 1,
        followings,
        bandwidthTime: (new Date()).getTime()/1000,
        bandwidth: getUsedBandwidthByAccount({
          bandwidthTime: state.bandwidthTime,
          bandwidth: state.bandwidth,
        }, (new Date()).getTime()/1000) + action.txSize
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
        },
        bandwidthTime: (new Date()).getTime()/1000,
        bandwidth: getUsedBandwidthByAccount({
          bandwidthTime: state.bandwidthTime,
          bandwidth: state.bandwidth,
        }, (new Date()).getTime()/1000) + action.txSize
      }
    case userActionsConst.GET_USER_PROFILE_DONE:
      return {
        ...state,
        ...action.userProfile
      }
    case userActionsConst.SUBMIT_UPDATE_PROFILE:
      return {
        ...state,
        isLoading: true,
      }
    case userActionsConst.SUBMIT_UPDATE_PROFILE_DONE:
      if(action.profile.name) {
        window.location.reload();
      }
      return {
        ...state,
        ...action.profile, 
        isEditting: false,
        isLoading: false,
        sequence: action.sequence,
        bandwidthTime: (new Date()).getTime()/1000,
        bandwidth: getUsedBandwidthByAccount({
          bandwidthTime: state.bandwidthTime,
          bandwidth: state.bandwidth,
        }, (new Date()).getTime()/1000) + action.txSize
      }
    case userActionsConst.SUBMIT_UPDATE_PROFILE_FALSE:
      return {
        ...state,
        error: action.error,
        isEditting: false,
        isLoading: false,
        sequence: action.sequence,
        bandwidthTime: (new Date()).getTime()/1000,
        bandwidth: getUsedBandwidthByAccount({
          bandwidthTime: state.bandwidthTime,
          bandwidth: state.bandwidth,
        }, (new Date()).getTime()/1000) + action.txSize
      }
    case userActionsConst.EDIT_PROFILE:
      return {
        ...state,
        isEditting: true
      }
    case userActionsConst.BEGIN_POST_TWEET: 
      return {
        ...state,
        isLoading: true
      }
    case userActionsConst.POST_TWEET_DONE:
      return {
        ...state,
        isLoading: false,
        sequence: state.sequence + 1,
        bandwidthTime: (new Date()).getTime()/1000,
        bandwidth: getUsedBandwidthByAccount({
          bandwidthTime: state.bandwidthTime,
          bandwidth: state.bandwidth,
        }, (new Date()).getTime()/1000) + action.txSize
      }
    case userActionsConst.POST_TWEET_FALSE: 
      return {
      ...state,
      error: action.error
    }
    case userActionsConst.LOG_OUT: 
      return initialState;
    default:
      return state
  }
}
