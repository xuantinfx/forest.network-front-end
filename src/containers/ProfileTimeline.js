import { connect } from 'react-redux';
import ProfileTimeline from '../components/ProfileTimeline';
import { closeTweetDetailsModal, seeTweetDetails } from '../actions/tweetActions';
import { requestApi } from '../apis/requestApi';
import { getTweet } from '../apis/tweet'
import { beginLoadTweet, loadTweetDone,loadMoreTweetDone} from '../actions/tweetActions';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import {reactTweet} from '../actions/userActions'

const loadTweets = (dispatch, address, page, size, publicKey) => {
  dispatch(beginLoadTweet());
  requestApi(getTweet(address,page, size, publicKey))
  .then(res => {
    dispatch(loadTweetDone(res.data.data, res.data.total, page))
  })
  .catch(err => {
    console.error(err)
  })
}

const loadMoreTweets = (dispatch, address, page, size, publicKey) => {
  requestApi(getTweet(address,page, size, publicKey))
  .then(res => {
    dispatch(loadMoreTweetDone(res.data.data, res.data.total))
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
    loadTweets: (address, page,size, publicKey) => {
      loadTweets(dispatch, address, page, size, publicKey);
    },
    reactTweet: (hash, reaction)=>{
      dispatch(reactTweet(hash,reaction))
    },
    loadMoreTweets: (address, page, size) => {
      loadMoreTweets(dispatch, address, page, size);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileTimeline));