import { userActionsConst } from '../actions/userActions'

const initialState = {
  isLogin: true,
  sequence: 0,
  //Cờ đã đăng nhập hay chưa
  alreadyLogin: false,
  name: 'YouTube',
  picture: './template/1500x500',
  bio: 'Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone.',
  location: 'San Bruno, CA',
  joinDate: new Date('12/3/2018, 12:09:10 AM').getTime(),
}

export default (state = initialState, { type, isLogin, alreadyLogin, profile }) => {
  //console.log('isLogin', isLogin)
  switch (type) {
    case userActionsConst.CHANGE_SIGNUP:
      return {
        ...state,
        isLogin
      }
    case userActionsConst.LOGIN:
      return {
        ...state,
        alreadyLogin
      }
    case userActionsConst.LOGIN_DONE:
      return {
        ...state,
        name: profile.name||'no name',
        avatarUrl: profile.picture||"",
        bio: profile.bio||"",
        location: profile.location||"",
        joinDate: new Date(profile.joinDate).getTime(),
      }
    default:
      return state
  }
}
