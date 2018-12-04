import { connect } from 'react-redux'
import Follow from '../components/Follow'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.infoUserPage
    }
}

export default connect(mapStateToProps)(Follow)