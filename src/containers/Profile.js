import Profile from "../components/Profile/";
import { connect } from 'react-redux'
import { editProfile} from '../actions/updateProfile'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.profile
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editProfile: (profile) => {
            dispatch(editProfile(profile))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);