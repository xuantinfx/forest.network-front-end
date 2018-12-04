import { combineReducers } from 'redux'
import followers from './followerReducer'
import followings from './followingReducer'
import profile from './profileReducer'
import tweets from './tweetReducer'

export default combineReducers({
    followers,
    followings,
    profile,
    tweets
})