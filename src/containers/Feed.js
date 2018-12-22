import Feed from '../components/Feed'
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        alreadyLogin: state.user.alreadyLogin
    }
  }
  
export default connect(mapStateToProps)(Feed);