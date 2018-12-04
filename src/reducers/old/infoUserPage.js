const initialState = {
    urlImg: "./template/1500x500",
    tweet: "23 N",
    followings: "1.018",
    follower: "71,1 Tr",
    likes: "2.316",
    list: "1",
    moment: "4",
    listFollower: [{
        urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
        urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
        isFollow: true,
        name: "Harry Potter",
        username: "ltsHarryPotter",
        description: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
    }, {
        urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
        urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
        isFollow: true,
        name: "Harry Potter",
        username: "ltsHarryPotter",
        description: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
    }, {
        urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
        urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
        isFollow: true,
        name: "Harry Potter",
        username: "ltsHarryPotter",
        description: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
    }, {
        urlCover: "https://pbs.twimg.com/profile_banners/58545637/1541593248/600x200",
        urlAvt: "https://pbs.twimg.com/profile_images/753067310848421889/vF6kq5Xv_bigger.jpg",
        isFollow: true,
        name: "Harry Potter",
        username: "ltsHarryPotter",
        description: "| Not affiliated with Harry Potter | We do not own the content posted | Not a Muggle | *Parody*"
    }]
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        default:
            return state
    }
}