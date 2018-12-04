import ProfileEdit from "../components/ProfileEdit/";
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.profile
    }
}

export default connect(mapStateToProps)(ProfileEdit);