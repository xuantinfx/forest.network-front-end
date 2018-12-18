export const userActionsConst = {
    CHANGE_SIGNUP: 'CHANGE_SIGNUP'
}

export const changeSingup = (isLogin) => {
    return {
        type: userActionsConst.CHANGE_SIGNUP,
        isLogin
    }
}