import { postTranSaction } from "../apis/transaction";
import { updatePicture } from "../lib/encodeTX";
import { requestApi } from "../apis/requestApi";
import { getProfile } from "../apis/profile";
import { Keypair } from 'stellar-base';

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
    GET_USER_PROFILE_DONE: 'GET_USER_PROFILE_DONE'
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
            console.log(result);
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
            console.log(result)
            dispatch(getUserProfileDone(result.data))
        }).catch(err => {
            console.error(err);
        })
    }
}