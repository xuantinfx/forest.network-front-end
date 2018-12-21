import { connect } from 'react-redux';
import PostTweet from '../components/PostTweet';
import { postTweet } from '../actions/userActions';

const mapStateToProps = (state, ownProps) => {
    return {
        picture: state.user.picture || {},
        name: state.user.name
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        postTweet: (tweetContent) => {
            dispatch(postTweet(tweetContent));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)((PostTweet))