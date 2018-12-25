import { connect } from 'react-redux'
import TweetDetail from '../components/TweetDetail'

const mapStateToProps = (state) => {
  return {
    userPicture: state.user.picture.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetDetail)
