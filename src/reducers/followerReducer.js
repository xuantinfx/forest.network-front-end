const initialState = {
  total: 123232,
  loadedFollowers: 4,
  followers: [{
    urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
    urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
    name: "Harry Potter 1",
    username: "ltsHarryPotter",
    isFollow: false
  }, {
    urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
    urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
    name: "Harry Potter 2",
    username: "ltsHarryPotter",
    isFollow: false
  }, {
    urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
    urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
    name: "Harry Potter 3",
    username: "ltsHarryPotter",
    isFollow: false
  }, {
    urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
    urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
    name: "Harry Potter 4",
    username: "ltsHarryPotter",
    isFollow: true
  }]

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
