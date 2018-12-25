import { connect } from 'react-redux'
import TweetDetail from '../components/TweetDetail'
import { replyTweet } from '../actions/userActions';

const mapStateToProps = (state) => {
  return {
    userPicture: state.user.picture.data,
    alreadyLogin: state.user.alreadyLogin
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendUserReply: (content) => {
      let { tweet } = ownProps;
      dispatch(replyTweet(content, tweet.hash || ''));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetDetail)
