import User from "../components/Navbar/User";
import { connect } from 'react-redux'
import { changeSingup, login } from "../actions/userActions";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSingup: (isLogin) => {
            dispatch(changeSingup(isLogin))
        },
        login: (secretKey)=>{
            dispatch(login(secretKey))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);