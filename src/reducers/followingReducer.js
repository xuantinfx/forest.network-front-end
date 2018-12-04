const initialState = {
  total: 123232,
  loadedFollowings: 4,
  followings: [{
    urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
    urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
    isFollow: true,
    name: "Harry Potter 5",
    username: "ltsHarryPotter",
    bio: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
  }, {
    urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
    urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
    isFollow: false,
    name: "Harry Potter 6",
    username: "ltsHarryPotter",
    bio: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
  }, {
    urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
    urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
    isFollow: true,
    name: "Harry Potter 7",
    username: "ltsHarryPotter",
    bio: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
  }, {
    urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
    urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
    isFollow: true,
    name: "Harry Potter 8",
    username: "ltsHarryPotter",
    bio: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
  }]

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
