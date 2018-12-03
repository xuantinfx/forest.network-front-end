import Profile from "../components/Profile/Profile";
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.profile
    }
}

export default connect(mapStateToProps)(Profile);