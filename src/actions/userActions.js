export const userActionsConst = {
    CHANGE_SIGNUP: 'CHANGE_SIGNUP',
    LOGIN: 'LOGIN',
    LOGIN_DONE: 'LOGIN_DONE',
    INCREASE_SEQUENCE: 'INCREASE_SEQUENCE' 
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