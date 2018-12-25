import { followerActions } from "../actions/followerActions";
import { followingActions } from "../actions/followingActions";
import { profileActions } from "../actions/profileActions";
import { tweetAction } from "../actions/tweetActions";
import { userActionsConst } from "../actions/userActions";
import { alertsActions } from "../actions/alertsActions";

export default (state = false, action) => {
  switch (action.type) {
    case followerActions.BEGIN_LOAD_FOLLOWER:
    case followingActions.BEGIN_LOAD_FOLLOWING:
    case profileActions.BEGIN_GET_PROFILE_BY_ADDRESS:
    case userActionsConst.LOGIN:
    case tweetAction.BEGIN_LOAD_TWEET:
    case userActionsConst.BEGIN_LOAD_TWEET:
    case userActionsConst.BEGIN_FOLLOW:
    case userActionsConst.BEGIN_UPDATE_PROFILE_PICTURE:
    case userActionsConst.BEGIN_GET_USER_PROFILE:
    case userActionsConst.SUBMIT_UPDATE_PROFILE:
    case userActionsConst.BEGIN_POST_TWEET:
    case userActionsConst.BEGIN_SEND_MONEY:
    case userActionsConst.BEGIN_REACT:
    case userActionsConst.BEGIN_CREATE_ACCOUNT:
    case userActionsConst.BEGIN_REPLY_TWEET:
      return true;
    case alertsActions.SHOW_MESSAGE:
    case alertsActions.SHOW_ERROR:
    case followerActions.LOAD_FOLLOWER_DONE:
    case followingActions.LOAD_FOLLOWING_DONE:
    case profileActions.GET_PROFILE_BY_ADDRESS_DONE:
    case profileActions.LOAD_PROFILE_FALSE:
    case profileActions.LOAD_FOLLOW_FALSE:
    case tweetAction.LOAD_TWEET_DONE:
    case userActionsConst.LOAD_TWEET_DONE:
    case userActionsConst.LOGIN_DONE:
    case userActionsConst.FOLLOW_DONE:
    case userActionsConst.UNFOLLOW_DONE:
    case userActionsConst.FOLLOW_FALSE:
    case userActionsConst.UPDATE_PROFILE_PICTURE_DONE:
    case userActionsConst.UPDATE_PROFILE_PICTURE_FAIL:
    case userActionsConst.GET_USER_PROFILE_DONE:
    case userActionsConst.SUBMIT_UPDATE_PROFILE_DONE:
    case userActionsConst.SUBMIT_UPDATE_PROFILE_FALSE:
    case userActionsConst.POST_TWEET_DONE:
    case userActionsConst.POST_TWEET_FALSE:
    case userActionsConst.SEND_MONEY_DONE:
    case userActionsConst.SEND_MONEY_FAIL:
    case userActionsConst.REACT_DONE:
    case userActionsConst.REACT_FALSE:
    case userActionsConst.CREATE_ACCOUNT_DONE:
    case userActionsConst.CREATE_ACCOUNT_FAIL:
    case userActionsConst.REPLY_TWEET_DONE:
    case userActionsConst.REPLY_TWEET_FAIL:
      return false;
    default: return false
  }
}