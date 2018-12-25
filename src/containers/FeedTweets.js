import { connect } from 'react-redux';
import ProfileTimeline from '../components/ProfileTimeline';
import { closeTweetDetailsModal, seeTweetDetails } from '../actions/tweetActions';
import { requestApi } from '../apis/requestApi';
import { getFeed } from '../apis/feed'
import { beginLoadTweet, loadTweetDone} from '../actions/tweetActions';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { reactTweet} from '../actions/userActions'

const loadTweets = (dispatch, address, page, size) => {
  if(page <= 1)
    dispatch(beginLoadTweet());
  requestApi(getFeed(address, page, size))
  .then(res => {
    dispatch(loadTweetDone(res.data.data, res.data.total))
  })
  .catch(err => {
    console.error(err)
  })
}

const mapStateToProps = function (state) {
  let tweetsSorted = _.cloneDeep(state.tweets.tweets);
  tweetsSorted = tweetsSorted.sort((tweet1, tweet2) => {
    return tweet2.time - tweet1.time;
  })
  return {
    tweets: tweetsSorted,
    currentTweet: state.tweets.tweets[state.tweets.currentTweet],
    modalIsOpen: state.tweets.modalIsOpen,
    isLoading: state.tweets.isLoading,
    picture: state.user.picture,
    name: state.user.name,
    alreadyLogin: state.user.alreadyLogin,
    page: state.tweets.page,
    size: state.tweets.size,
    total: state.tweets.total
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    seeDetails: (index) => {
      dispatch(seeTweetDetails(index));
    },
    closeModal: () => {
      dispatch(closeTweetDetailsModal())
    },
    loadTweets: (address, page, size) => {
      loadTweets(dispatch, address, page, size);
    },
    reactTweet: (hash, reaction)=>{
      dispatch(reactTweet(hash,reaction))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileTimeline));