import Banner from '../components/Banner';
import { connect } from 'react-redux';
import {follow, unFollow } from '../actions/userActions';

const mapStateToProps = (state, ownProps) => {
    let { tweets, followings, followers } = state
    return {
        tweet: tweets.total,
        followings: followings.total,
        followers: followers.total,
        alreadyLogin: state.user.alreadyLogin,
        listFollowings: state.user.followings
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        follow: (listFollowings, address) => {
            dispatch(follow(listFollowings, address));
        },
        unFollow: (listFollowings, address) => {
            dispatch(unFollow(listFollowings, address));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);