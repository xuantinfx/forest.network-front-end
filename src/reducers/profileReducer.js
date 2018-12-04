import { updateProfileConst} from '../actions/updateProfile'

const initialState = {
  displayName: 'YouTube',
  userName: 'YouTube',
  avatarUrl: './template/1500x500',
  bio: 'Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone.',
  location: 'San Bruno, CA',
  joinDate: new Date('12/3/2018, 12:09:10 AM').getTime()
}

export default (state = initialState, { type, profile }) => {
  switch (type) {
    case updateProfileConst.UPDATE_PROFILE:
      return {
        ...state,
        ...profile
      }
    default:
      return state
  }
}
