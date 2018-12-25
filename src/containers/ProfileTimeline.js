import { connect } from 'react-redux';
import ProfileTimeline from '../components/ProfileTimeline';
import { closeTweetDetailsModal, seeTweetDetails } from '../actions/tweetActions';
import { requestApi } from '../apis/requestApi';
import { getTweet } from '../apis/tweet'
import { beginLoadTweet, loadTweetDone} from '../actions/tweetActions';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import {reactTweet} from '../actions/userActions'

const loadTweets = (dispatch, address, publicKey) => {
  dispatch(beginLoadTweet());
  requestApi(getTweet(address, publicKey))
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
    alreadyLogin: state.user.alreadyLogin
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
    loadTweets: (address, publicKey) => {
      loadTweets(dispatch, address, publicKey);
    },
    reactTweet: (hash, reaction)=>{
      dispatch(reactTweet(hash,reaction))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileTimeline));