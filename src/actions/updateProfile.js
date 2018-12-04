export const updateProfileConst = {
    UPDATE_PROFILE: 'UPDATE_PROFILE',
    EDIT_PROFILE: 'EDIT_PROFILE'
}

export const updateProfile = (profile) => {
    return {
        type: updateProfileConst.UPDATE_PROFILE,
        profile
    }
}

export const editProfile = (isEditting)=>{
    return {
        type: updateProfileConst.EDIT_PROFILE,
        isEditting,
    }
}