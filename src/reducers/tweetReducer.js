const initialState = {
  total: '230332',
  loadedTweets: 3,
  tweets: [{
    id: '1',
    tweetUrl: '/tweet/1',
    time: 1543912837331,
    content: 'Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone. Learn more about Article 13: https://youtu.be/lepYkDZ62OY #SaveYourInternet',
    imgUrl: '/img/tweet_youtube1.jpg',
    totalReplies: 12200,
    totalRetweets: 119,
    totalLikes: 14,
  },
  {
    id: '2',
    tweetUrl: '/tweet/2',
    time: 1543912837331,
    content: 'Yayhooo ayashashd',
    imgUrl: '/img/tweet_youtube1.jpg',
    totalReplies: 12,
    totalRetweets: 3,
    totalLikes: 124,
  },
  {
    id: '3',
    tweetUrl: '/tweet/3',
    time: 1543912837331,
    content: '#SaveTheWorld',
    imgUrl: '/img/tweet_youtube1.jpg',
    totalReplies: 203339,
    totalRetweets: 2102,
    totalLikes: 123123,
  }]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
