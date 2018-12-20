export const tweetAction = {
  CLOSE_TWEET_DETAILS_MODAL: 'CLOSE_TWEET_DETAILS_MODAL',
  SEE_TWEET_DETAILS: 'SEE_TWEET_DETAILS',
  BEGIN_LOAD_TWEET: "BEGIN_LOAD_TWEET",
  LOAD_TWEET_DONE: "LOAD_TWEET_DONE"
}

export const beginLoadTweet = () => ({
  type: tweetAction.BEGIN_LOAD_TWEET
})

export const loadTweetDone = (tweets, total) => ({
  type: tweetAction.LOAD_TWEET_DONE,
  tweets,
  total
})

export const closeTweetDetailsModal = () => ({
  type: tweetAction.CLOSE_TWEET_DETAILS_MODAL
})

export const seeTweetDetails = (index) => ({
  type: tweetAction.SEE_TWEET_DETAILS,
  index
})

