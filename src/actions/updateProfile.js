export const updateProfileConst = {
    UPDATE_PROFILE: 'UPDATE_PROFILE'
}

export const updateProfile = (profile) => {
    return {
        type: updateProfileConst.UPDATE_PROFILE,
        profile
    }
}