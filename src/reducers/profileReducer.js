import { updateProfileConst } from '../actions/updateProfile'
import { profileActions } from '../actions/profileActions';
import { userActionsConst } from '../actions/userActions';

const initialState = {
  displayName: 'YouTube',
  userName: 'YouTube',
  picture: '',
  bio: 'Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone.',
  location: 'San Bruno, CA',
  joinDate: new Date('12/3/2018, 12:09:10 AM').getTime(),
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
        userName: action.profile.name,
        displayName: action.profile.name
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
