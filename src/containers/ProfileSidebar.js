import ProfileSidebar from "../components/ProfileSidebar/";
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.profileSidebar
    }
}

export default connect(mapStateToProps)(ProfileSidebar);