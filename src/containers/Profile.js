import Profile from "../components/Profile/";
import { connect } from 'react-redux'
import { editProfile} from '../actions/userActions'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.profile,
        isEditting: state.user.isEditting
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editProfile: () => {
            dispatch(editProfile())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);