import { requestApi } from "../apis/requestApi";
import { getProfile } from "../apis/profile";

export const profileActions = {
  BEGIN_GET_PROFILE_BY_ADDRESS: 'BEGIN_GET_PROFILE_BY_ADDRESS',
  GET_PROFILE_BY_ADDRESS_DONE: 'GET_PROFILE_BY_ADDRESS_DONE',
}

export const beginGetProfileByAddress = () => {
  return {
    type: profileActions.BEGIN_GET_PROFILE_BY_ADDRESS
  }
}

export const getProfileByAddressDone = (profile) => {
  return {
    type: profileActions.GET_PROFILE_BY_ADDRESS_DONE,
    profile: profile
  }
}

export const getProfileByAddress = (address = '') => {
  return (dispatch) => {
    dispatch(beginGetProfileByAddress());

    const config = getProfile(address);

    requestApi(config).then(result => {
      console.log(result)
      dispatch(getProfileByAddressDone(result.data))
    }).catch(err => {
      console.error(err);
    })
  }
}