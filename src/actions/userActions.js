import { requestApi } from '../apis/requestApi';
import { postTranSaction } from '../apis/transaction';
import { followings } from '../lib/encodeTX';
import _ from 'lodash';

export const userActionsConst = {
    CHANGE_SIGNUP: 'CHANGE_SIGNUP',
    LOGIN: 'LOGIN',
    LOGIN_DONE: 'LOGIN_DONE',
    INCREASE_SEQUENCE: 'INCREASE_SEQUENCE',
    BEGIN_FOLLOW: "BEGIN_FOLLOW",
    FOLLOW_DONE: "FOLLOW_DONE",
    UNFOLLOW_DONE: "UNFOLLOW_DONE",
    FOLLOW_FALSE: "FOLLOW_FALSE"
}

export const changeSingup = (isLogin) => {
    return {
        type: userActionsConst.CHANGE_SIGNUP,
        isLogin
    }
}

export const login = (alreadyLogin)=>{
    return {
        type: userActionsConst.LOGIN,
        alreadyLogin,
    }
}

export const loginDone = (profile)=>{
    return {
        type: userActionsConst.LOGIN_DONE,
        profile
    }
}

export const increaseSequence = ()=>{
    return{
        type: userActionsConst.INCREASE_SEQUENCE
    }
}

const updateFollowings = (listFollowings, sequence) => {
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

export const follow = (listFollowings, address) => {
    return (dispatch, getState) => {
        let sequence = getState().user.sequence;
        let newListFollowings = _.uniq([...listFollowings, address]);
        updateFollowings(newListFollowings, sequence)
        .then(() => {
            dispatch(followDone(address));
        })
        .catch((error) => {
            dispatch(followFalse(error));
        })
    }
}

export const unFollow = (listFollowings, address) => {
    return (dispatch, getState) => {
        let sequence = getState().user.sequence;
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
}

export const beginFollow = () => {
    return {
        type: userActionsConst.BEGIN_FOLLOW
    }
}

export const followDone = (address) => {
    return {
        type: userActionsConst.FOLLOW_DONE,
        address
    }
}

export const unFollowDone = (address) => {
    return {
        type: userActionsConst.UNFOLLOW_DONE,
        address
    }
}

export const followFalse = (error) => {
    return {
        type: userActionsConst.FOLLOW_FALSE,
        error
    }
}