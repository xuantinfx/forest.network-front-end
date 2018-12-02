import Banner from '../components/Banner'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.infoUserPage
    }
}

export default connect(mapStateToProps)(Banner);