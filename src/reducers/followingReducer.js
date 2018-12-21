// const initialState = {
//   total: 123232,
//   loadedFollowings: 4,
//   followings: [{
//     urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
//     urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
//     isFollow: true,
//     name: "Harry Potter 5",
//     username: "ltsHarryPotter",
//     bio: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
//   }, {
//     urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
//     urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
//     isFollow: false,
//     name: "Harry Potter 6",
//     username: "ltsHarryPotter",
//     bio: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
//   }, {
//     urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
//     urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
//     isFollow: true,
//     name: "Harry Potter 7",
//     username: "ltsHarryPotter",
//     bio: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
//   }, {
//     urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
//     urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
//     isFollow: true,
//     name: "Harry Potter 8",
//     username: "ltsHarryPotter",
//     bio: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
//   }]
// }

import { followingActions } from '../actions/followingActions'
import { profileActions } from '../actions/profileActions';

const initialState = {
  isLoading: true,
  total: 0,
  loadedFollowings: 0,
  followings: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case followingActions.BEGIN_LOAD_FOLLOWING:
      return {
        ...state,
        isLoading: true,
      }
    case followingActions.LOAD_FOLLOWING_DONE:
      return {
        ...state,
        isLoading: false,
        total: action.total,
        loadedFollowings: action.followings.length,
        followings: action.followings
      }
    case profileActions.GET_PROFILE_BY_ADDRESS_DONE:
      return {
        ...state,
        total: action.profile.followings.length
      }
    default:
      return state
  }
}
