import { connect } from 'react-redux'
import Follow from '../components/Follow'
import { loadFollow } from '../actions/profileActions'
import { follow, unFollow } from '../actions/userActions'
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

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
        alreadyLogin: state.user.alreadyLogin
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadFollow: (address) => {
            let isFollower = window.location.href.indexOf('/followers') !== -1;
            dispatch(loadFollow(address, isFollower));
        },
        follow: (listFollowings, address) => {
            dispatch(follow(listFollowings, address));
        },
        unFollow: (listFollowings, address) => {
            dispatch(unFollow(listFollowings, address));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Follow))