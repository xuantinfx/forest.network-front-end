const initialState = {
  total: '230332',
  loadedTweets: 3,
  modalIsOpen: true,
  currentTweet: 0,
  tweets: [{
    id: '1',
    tweetUrl: '/tweet/1',
    avatarUrl: '/img/avatar_youtube.jpg',
    displayName: 'YouTube',
    username: 'YouTube',
    time: 1543912837331,
    content: 'Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone. Learn more about Article 13: https://youtu.be/lepYkDZ62OY #SaveYourInternet',
    imgUrl: '/img/tweet_youtube1.jpg',
    totalReplies: 12200,
    loadedReplies: [{
      avatarUrl: '/img/avatar_trump.jpg',
      displayName: 'Donald Trump',
      username: 'realDonaldTrump',
      time: 1543944314561,
      content: 'Tell me how you think'
    },
    {
      avatarUrl: '/img/avatar_trump.jpg',
      displayName: 'Donald Trump',
      username: 'realDonaldTrump',
      time: 1443944314561,
      content: 'I want to make America great again'
    },
    {
      avatarUrl: '/img/avatar_trump.jpg',
      displayName: 'Donald Trump',
      username: 'realDonaldTrump',
      time: 1343944314561,
      content: 'Hi there, nice to meet you'
    }],
    totalRetweets: 119,
    totalLikes: 14,
    hasLike: true
  },
  {
    id: '2',
    tweetUrl: '/tweet/2',
    avatarUrl: '/img/avatar_youtube.jpg',
    displayName: 'YouTube',
    username: 'YouTube',
    time: 1543912837331,
    content: 'Yayhooo ayashashd',
    imgUrl: '/img/tweet_youtube1.jpg',
    totalReplies: 12,
    loadedReplies: [{
      avatarUrl: '/img/avatar_trump.jpg',
      displayName: 'Donald Trump',
      username: 'realDonaldTrump',
      time: 1543944314561,
      content: 'This is my reply'
    }],
    totalRetweets: 3,
    totalLikes: 124,
    hasLike: true
  },
  {
    id: '3',
    tweetUrl: '/tweet/3',
    avatarUrl: '/img/avatar_youtube.jpg',
    displayName: 'YouTube',
    username: 'YouTube',
    time: 1543912837331,
    content: '#SaveTheWorld',
    imgUrl: '/img/tweet_youtube1.jpg',
    totalReplies: 203339,
    loadedReplies: [{
      avatarUrl: '/img/avatar_trump.jpg',
      displayName: 'Donald Trump',
      username: 'realDonaldTrump',
      time: 1543944314561,
      content: 'This is my reply'
    }],
    totalRetweets: 2102,
    totalLikes: 123123,
    hasLike: true
  }]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
