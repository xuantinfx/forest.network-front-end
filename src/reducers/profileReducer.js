import { updateProfileConst } from '../actions/updateProfile'
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
    case updateProfileConst.UPDATE_PROFILE:
      return {
        ...state,
        ...action.profile
      }
    case updateProfileConst.EDIT_PROFILE:
      return {
        ...state,
        ...action.isEditting
      }

    case profileActions.GET_PROFILE_BY_ADDRESS_DONE:
      return {
        ...state,
        picture: action.profile.picture,
        joinDate: new Date(action.profile.joinDate).getTime(),
        name: action.profile.name,
      }
    case userActionsConst.UPDATE_PROFILE_PICTURE_DONE:
      return {
        ...state,
        picture: {
          ...state.picture,
          data: action.pictureBuffer
        }
      }
    default:
      return state
  }
}
