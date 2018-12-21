import { postTranSaction } from "../apis/transaction";
import { updatePicture } from "../lib/encodeTX";
import { requestApi } from "../apis/requestApi";
import { getProfile } from "../apis/profile";
import { Keypair } from 'stellar-base';
import { followings } from '../lib/encodeTX';
import updateAccountMultiKeys from '../utilities/updateAccountMultiKeys'
import _ from 'lodash';

export const userActionsConst = {
    CHANGE_SIGNUP: 'CHANGE_SIGNUP',
    LOGIN: 'LOGIN',
    LOGIN_DONE: 'LOGIN_DONE',
    INCREASE_SEQUENCE: 'INCREASE_SEQUENCE',
    BEGIN_FOLLOW: "BEGIN_FOLLOW",
    FOLLOW_DONE: "FOLLOW_DONE",
    UNFOLLOW_DONE: "UNFOLLOW_DONE",
    FOLLOW_FALSE: "FOLLOW_FALSE",
    BEGIN_UPDATE_PROFILE_PICTURE: 'BEGIN_UPDATE_PROFILE_PICTURE',
    UPDATE_PROFILE_PICTURE_DONE: 'UPDATE_PROFILE_PICTURE_DONE',
    BEGIN_GET_USER_PROFILE: 'BEGIN_GET_USER_PROFILE',
    GET_USER_PROFILE_DONE: 'GET_USER_PROFILE_DONE',
    SUBMIT_UPDATE_PROFILE: "SUBMIT_UPDATE_PROFILE",
    SUBMIT_UPDATE_PROFILE_FALSE: "SUBMIT_UPDATE_PROFILE_FALSE",
    SUBMIT_UPDATE_PROFILE_DONE: 'SUBMIT_UPDATE_PROFILE_DONE',
    EDIT_PROFILE: 'EDIT_PROFILE'
}

export const changeSingup = (isLogin) => {
    return {
        type: userActionsConst.CHANGE_SIGNUP,
        isLogin
    }
}

export const login = (alreadyLogin) => {
    return {
        type: userActionsConst.LOGIN,
        alreadyLogin,
    }
}

export const loginDone = (profile) => {
    return {
        type: userActionsConst.LOGIN_DONE,
        profile
    }
}

export const increaseSequence = () => {
    return {
        type: userActionsConst.INCREASE_SEQUENCE
    }
}

const updateFollowings = (listFollowings, sequence) => {
    return new Promise((resolve, reject) => {
        let secretKey = window.localStorage.getItem("SECRET_KEY");
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
            console.error(err);
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

export const beginUpdateProfilePicture = () => {
    return {
        type: userActionsConst.BEGIN_UPDATE_PROFILE_PICTURE
    }
}

export const updateProfilePictureDone = (pictureBuffer) => {
    return {
        type: userActionsConst.UPDATE_PROFILE_PICTURE_DONE,
        pictureBuffer: pictureBuffer
    }
}

export const updateProfilePicture = (pictureBuffer) => {
    return (dispatch, getState) => {
        let state = getState();
        let { sequence } = state.user
        dispatch(beginUpdateProfilePicture());

        //create transaction
        let tx = updatePicture(localStorage.getItem('SECRET_KEY'), sequence + 1, Buffer.from(''), pictureBuffer, 1);

        let config = postTranSaction(tx);

        requestApi(config).then(result => {
            dispatch(updateProfilePictureDone(pictureBuffer));
            dispatch(increaseSequence());
        }).catch(err => {
            console.error(err);
        })
    }
}

export const beginGetUserProfile = () => {
    return {
        type: userActionsConst.BEGIN_GET_USER_PROFILE
    }
}

export const getUserProfileDone = (userProfile) => {
    return {
        type: userActionsConst.GET_USER_PROFILE_DONE,
        userProfile: userProfile
    }
}

export const getUserProfile = () => {
    return (dispatch) => {
        dispatch(beginGetUserProfile());

        const userAddress = Keypair.fromSecret(window.localStorage.getItem('SECRET_KEY')).publicKey();
        const config = getProfile(userAddress);

        requestApi(config).then(result => {
            dispatch(getUserProfileDone(result.data))
        }).catch(err => {
            console.error(err);
        })
    }
}

const submitUpdateProfile = () => {
    return {
        type: userActionsConst.SUBMIT_UPDATE_PROFILE
    }
}

const submitUpdateProfileFalse = (error, sequence) => {
    return {
        type: userActionsConst.SUBMIT_UPDATE_PROFILE_FALSE,
        error,
        sequence
    }
}

const submitUpdateProfileDone = (profile, sequence) => {
    return {
        type: userActionsConst.SUBMIT_UPDATE_PROFILE_DONE,
        profile,
        sequence
    }
}

export const updateProfile = (profile) => {
    return (dispatch, getState) => {

        let state = getState();

        let sequence = state.user.sequence;

        let profileUpdate = {};

        let oldProfile = state.user;

        // Lọc ra những trường thay đổi
        for(let key in profile) {
            if(oldProfile[key] !== profile[key]) {
                profileUpdate[key] = profile[key];
            }
        }

        // Begin
        dispatch(submitUpdateProfile());

        updateAccountMultiKeys(profileUpdate, sequence)
        .then((sequence) => {
            // Done
            dispatch(submitUpdateProfileDone(profileUpdate, sequence));
        })
        .catch(({err, sequence}) => {
            console.error(err);
            // Error
            dispatch(submitUpdateProfileFalse(err, sequence));
        })

    }
}

export const editProfile = ()=>{
    return {
        type: userActionsConst.EDIT_PROFILE
    }
}