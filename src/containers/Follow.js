import { connect } from 'react-redux'
import Follow from '../components/Follow'

const mapStateToProps = (state, ownProps) => {

    let isFollower = window.location.href.indexOf('/followers') !== -1;
    let listFollow = isFollower ? 
        (state.followers ? state.followers.followers : []) :
        (state.followings ? state.followings.followings : [])

    return {
        listFollow,
        isFollower
    }
}

export default connect(mapStateToProps)(Follow)