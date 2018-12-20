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