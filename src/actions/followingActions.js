export const followingActions = {
  BEGIN_LOAD_FOLLOWING: "BEGIN_LOAD_FOLLOWING",
  LOAD_FOLLOWING_DONE: "LOAD_FOLLOWING_DONE"
}

export const beginLoadFollowing = () => ({
  type: followingActions.BEGIN_LOAD_FOLLOWING
})

export const loadFollowingDone = (followings, total) => ({
  type: followingActions.LOAD_FOLLOWING_DONE,
  followings,
  total
})
