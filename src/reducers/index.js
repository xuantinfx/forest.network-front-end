import { combineReducers } from 'redux'
import followers from './followerReducer'
import followings from './followingReducer'
import profile from './profileReducer'
import tweets from './tweetReducer'
import user from './userReducer'
import alerts from './alertsReducer'
import spinnerIsLoading from './spinnerReducer'

export default combineReducers({
    followers,
    followings,
    profile,
    tweets,
    user,
    alerts,
    spinnerIsLoading
})