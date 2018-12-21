// const initialState = {
//   total: 123232,
//   loadedFollowers: 4,
//   followers: [{
//     urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
//     urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
//     name: "Harry Potter 1",
//     username: "ltsHarryPotter",
//     isFollow: false
//   }, {
//     urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
//     urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
//     name: "Harry Potter 2",
//     username: "ltsHarryPotter",
//     isFollow: false
//   }, {
//     urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
//     urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
//     name: "Harry Potter 3",
//     username: "ltsHarryPotter",
//     isFollow: false
//   }, {
//     urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
//     urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
//     name: "Harry Potter 4",
//     username: "ltsHarryPotter",
//     isFollow: true
//   }]

// }
import { followerActions } from '../actions/followerActions';
import { profileActions } from "../actions/profileActions";

const initialState = {
  isLoading: true,
  total: 0,
  loadedFollowers: 0,
  followers: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case followerActions.BEGIN_LOAD_FOLLOWER:
      return {
        ...state,
        isLoading: true,
      }
    case followerActions.LOAD_FOLLOWER_DONE:
      return {
        ...state,
        isLoading: false,
        total: action.total,
        loadedFollowers: action.followers.length,
        followers: action.followers
      }
    case profileActions.GET_PROFILE_BY_ADDRESS_DONE:
      return {
        ...state,
        total: action.profile.followers.length
      }
    default:
      return state
  }
}
