import ProfileEdit from "../components/ProfileEdit";
import { connect } from 'react-redux'
import { updateProfile} from '../actions/userActions'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateProfile: (profile) => {
            dispatch(updateProfile(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);