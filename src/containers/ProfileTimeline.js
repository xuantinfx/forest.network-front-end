import { connect } from 'react-redux';
import ProfileTimeline from '../components/ProfileTimeline';
import { closeTweetDetailsModal, seeTweetDetails } from '../actions/tweetActions';
import { requestApi } from '../apis/requestApi';
import { getTweet } from '../apis/tweet'
import { beginLoadTweet, loadTweetDone} from '../actions/tweetActions';
import { withRouter } from 'react-router-dom';

const loadTweets = (dispatch, address) => {
  dispatch(beginLoadTweet());
  requestApi(getTweet(address))
  .then(res => {
    dispatch(loadTweetDone(res.data.data, res.data.total))
  })
  .catch(err => {
    console.error(err)
  })
}

const mapStateToProps = function (state) {
  return {
    tweets: state.tweets.tweets,
    currentTweet: state.tweets.tweets[state.tweets.currentTweet],
    modalIsOpen: state.tweets.modalIsOpen,
    isLoading: state.tweets.isLoading
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
    loadTweets: (address) => {
      loadTweets(dispatch, address);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileTimeline));