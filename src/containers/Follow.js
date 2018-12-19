import { connect } from 'react-redux'
import Follow from '../components/Follow'
import { requestApi } from '../apis/requestApi';
import { getFollowing } from '../apis/following';
import { getFollower } from '../apis/follower';
import { beginLoadFollower, loadFollowerDone } from '../actions/followerActions';
import { beginLoadFollowing, loadFollowingDone } from '../actions/followingActions'

const mapStateToProps = (state, ownProps) => {

    let isFollower = window.location.href.indexOf('/followers') !== -1;
    let isLoading = true;
    let listFollow = [];
    if(isFollower) {
        listFollow = state.followers.followers || [];
        isLoading = state.followers.isLoading;
    } else {
        listFollow = state.followings.followings || [];
        isLoading = state.followings.isLoading;
    }

    return {
        listFollow,
        isFollower,
        isLoading,
    }
}

const loadFollow = (dispatch, address) => {
    let isFollower = window.location.href.indexOf('/followers') !== -1;
    if (isFollower) {
        let api = getFollower(address);
        dispatch(beginLoadFollower())
        requestApi(api)
        .then(res => {
            dispatch(loadFollowerDone(res.data.data, res.data.total))
        })
        .catch(err => {
            console.log(err);
        })
    } else {
        let api = getFollowing(address);
        dispatch(beginLoadFollowing())
        requestApi(api)
        .then(res => {
            dispatch(loadFollowingDone(res.data.data, res.data.total))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadFollow: (address) => {
            loadFollow(dispatch, address)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Follow)