import { tweetAction } from "../actions/tweetActions";
import _ from 'lodash';
import { profileActions } from "../actions/profileActions";

// const initialState = {
//   total: 230332,
//   loadedTweets: 3,
//   modalIsOpen: false,
//   currentTweet: 0,
//   tweets: [{
//     id: '1',
//     avatarUrl: '/img/avatar_youtube.jpg',
//     name: 'YouTube',
//     time: 1543912837331,
//     content: 'Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone. Learn more about Article 13: https://youtu.be/lepYkDZ62OY #SaveYourInternet',
//     totalReplies: 12200,
//     loadedReplies: [{
//       avatarUrl: '/img/avatar_trump.jpg',
//       displayName: 'Donald Trump',
//       username: 'realDonaldTrump',
//       time: 1543944314561,
//       content: 'Tell me how you think'
//     }],
//     totalRetweets: 119,
//     totalLikes: 14,
//     hasLike: true
//   }]
// }

const initialState = {
  isLoading: true,
  total: 0,
  loadedTweets: 0,
  modalIsOpen: false,
  currentTweet: 0,
  tweets: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case tweetAction.CLOSE_TWEET_DETAILS_MODAL:
      return {
        ...state,
        modalIsOpen: false
      }
    case tweetAction.SEE_TWEET_DETAILS:
      return {
        ...state,
        modalIsOpen: true,
        currentTweet: action.index
      }
    case tweetAction.BEGIN_LOAD_TWEET:
      return {
        ...state,
        isLoading: true
      }
    case tweetAction.LOAD_TWEET_DONE:
      {
        let tweets = _.map(action.tweets, tweet => {
          return {
            ...tweet,
            time: (new Date(tweet.time).getTime()),
            totalReplies: tweet.replies.length,
            loadedReplies: tweet.replies,
            totalRetweets: 0,
            totalLikes: tweet.likes.length,
            hasLike: true
          }
        })

        return {
          ...state,
          isLoading: false,
          tweets: tweets,
          total: action.total,
        }
      }
    case profileActions.GET_PROFILE_BY_ADDRESS_DONE:
      return {
        ...state,
        total: action.profile.tweetsTotal
      }
    default:
      return state
  }
}
