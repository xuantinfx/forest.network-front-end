import Banner from '../components/Banner'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    let { profile, tweets, followings, followers } = state
    return {
        urlImg: profile.avatarUrl,
        tweet: tweets.total,
        followings: followings.total,
        followers: followers.total
    }
}

export default connect(mapStateToProps)(Banner);