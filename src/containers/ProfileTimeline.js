import { connect } from 'react-redux';
import ProfileTimeline from '../components/ProfileTimeline';

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
      console.log(index)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTimeline);