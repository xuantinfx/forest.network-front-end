import { requestApi } from "../apis/requestApi";
import { getProfile } from "../apis/profile";
import { postTranSaction } from "../apis/transaction";

export const profileActions = {
  BEGIN_GET_PROFILE_BY_ADDRESS: 'BEGIN_GET_PROFILE_BY_ADDRESS',
  GET_PROFILE_BY_ADDRESS_DONE: 'GET_PROFILE_BY_ADDRESS_DONE',
  BEGIN_UPDATE_PROFILE_PICTURE: 'BEGIN_UPDATE_PROFILE_PICTURE',
  UPDATE_PROFILE_PICTURE_DONE: 'UPDATE_PROFILE_PICTURE_DONE',
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

export const beginUpdateProfilePicture = () => {
  return {
    type: profileActions.BEGIN_UPDATE_PROFILE_PICTURE
  }
}

export const updateProfilePictureDone = (picture) => {
  return {
    type: profileActions.UPDATE_PROFILE_PICTURE_DONE,
    picture: picture
  }
}

export const updateProfilePicture = (pictureBuffer) => {
  return (dispatch, getState) => {
    let state = getState();
    dispatch(beginUpdateProfilePicture());

    //create and sign transaction
    let tx;

    let config = postTranSaction(tx);

    requestApi(config).then(result => {
      console.log(result);
      dispatch(updateProfilePictureDone())
    }).catch(err => {
      console.error(err);
    })
  }
}