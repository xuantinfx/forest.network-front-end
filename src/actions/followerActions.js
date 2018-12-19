export const followerActions = {
  BEGIN_LOAD_FOLLOWER: "BEGIN_LOAD_FOLLOWER",
  LOAD_FOLLOWER_DONE: "LOAD_FOLLOWER_DONE"
}

export const beginLoadFollower = () => ({
  type: followerActions.BEGIN_LOAD_FOLLOWER
})

export const loadFollowerDone = (followers, total) => ({
  type: followerActions.LOAD_FOLLOWER_DONE,
  followers,
  total
})
