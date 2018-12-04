import { connect } from 'react-redux';
import ProfileTimeline from '../components/ProfileTimeline';
import { closeTweetDetailsModal, seeTweetDetails } from '../actions/tweetActions';

const mapStateToProps = function (state) {
  return {
    tweets: state.tweets.tweets,
    currentTweet: state.tweets.tweets[state.tweets.currentTweet],
    modalIsOpen: state.tweets.modalIsOpen
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    seeDetails: (index) => {
      dispatch(seeTweetDetails(index));
    },
    closeModal: () => {
      dispatch(closeTweetDetailsModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTimeline);