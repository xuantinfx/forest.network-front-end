import ProfileEdit from "../components/ProfileEdit/";
import { connect } from 'react-redux'
import { updateProfile} from '../actions/updateProfile'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.profile
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