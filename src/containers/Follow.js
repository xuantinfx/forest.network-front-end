import { connect } from 'react-redux'
import Follow from '../components/Follow'
import { requestApi } from '../apis/requestApi';
import { getFollowing } from '../apis/following';
import { getFollower } from '../apis/follower';
import { beginLoadFollower, loadFollowerDone } from '../actions/followerActions';
import { beginLoadFollowing, loadFollowingDone } from '../actions/followingActions'
import { followings } from '../lib/encodeTX';
import { postTranSaction } from '../apis/transaction';
import { followDone, unFollowDone, followFalse} from '../actions/userActions'
import _ from 'lodash';

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

    listFollow = _.map(listFollow, profile => {
        if(_.findIndex(state.user.followings, folowing => profile.address === folowing) >= 0) {
            return {
                ...profile,
                isFollow: true,
            }
        }
        return {
            ...profile,
            isFollow: false,
        }
    })

    return {
        listFollow,
        isFollower,
        isLoading,
        listUserFollow: state.user.followings,
        sequence: state.user.sequence,
        alreadyLogin: state.user.alreadyLogin
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

const updateFollowings = (listFollowings, sequence) => {
    debugger;
    return new Promise((resolve, reject) => {
        let secretKey = window.localStorage.getItem("PRIVATE_KEY");
        requestApi(postTranSaction(followings(secretKey, sequence + 1, Buffer.alloc(0), listFollowings, 1)))
        .then(res => {
            if (res.message.error) {
                // False
                reject(res.message.error)
            } else {
                // Success
                resolve();
            }
        })
        .catch(err => {
            console.log(err);
            reject(err.message.error);
        })
    })
}

const follow = (dispatch, listFollowings, address, sequence) => {
    let newListFollowings = _.uniq([...listFollowings, address]);
    updateFollowings(newListFollowings, sequence)
    .then(() => {
        dispatch(followDone(address));
    })
    .catch((error) => {
        dispatch(followFalse(error));
    })
}

const unFollow = (dispatch, listFollowings, address, sequence) => {
    let newListFollowings = _.cloneDeep(listFollowings);
    _.remove(newListFollowings, (following) => following === address);
    updateFollowings(newListFollowings, sequence)
    .then(() => {
        dispatch(unFollowDone(address));
    })
    .catch((error) => {
        dispatch(followFalse(error));
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadFollow: (address) => {
            loadFollow(dispatch, address);
        },
        follow: (listFollowings, address, sequence) => {
            follow(dispatch, listFollowings, address, sequence);
        },
        unFollow: (listFollowings, address, sequence) => {
            unFollow(dispatch, listFollowings, address, sequence);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Follow)