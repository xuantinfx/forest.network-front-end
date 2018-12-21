import { profileActions } from '../actions/profileActions';
import { userActionsConst } from '../actions/userActions';

const initialState = {
  name: "",
  picture: {},
  bio: '',
  location: '',
  joinDate: new Date().getTime(),
  isEditting: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case profileActions.GET_PROFILE_BY_ADDRESS_DONE:
      return {
        ...initialState,
        ...action.profile,
        joinDate: new Date(action.profile.joinDate).getTime(),
      }
    case userActionsConst.UPDATE_PROFILE_PICTURE_DONE:
      return {
        ...state,
        picture: {
          ...state.picture,
          data: action.pictureBuffer
        }
      }
    case userActionsConst.SUBMIT_UPDATE_PROFILE_DONE: 
      return {
        ...state,
        ...action.profile
      }
    default:
      return state
  }
}
