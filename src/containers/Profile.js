import Profile from "../components/Profile/";
import { connect } from 'react-redux'
import { editProfile} from '../actions/userActions';

const mapStateToProps = (state, ownProps) => {
    if (state.user.address === ownProps.address) {
        return {
            ...state.user,
            isEditting: state.user.isEditting,
            alreadyLogin: state.user.alreadyLogin
        }
    }

    return {
        ...state.profile,
        isEditting: state.user.isEditting,
        alreadyLogin: state.user.alreadyLogin
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