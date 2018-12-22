import User from "../components/Navbar/User";
import { connect } from 'react-redux'
import { changeSingup, login, loginDone, increaseSequence, logout } from "../actions/userActions";
import {withRouter} from 'react-router-dom'
import { requestApi } from '../apis/requestApi'

const requestProfile = (dispatch, publicKey, callback)=>{
    requestApi({
        url: window.APP.API_HOST + "/profile/" + publicKey,
        method: "GET",
        params: {},
        headers: {public_key: publicKey}
    }).then((res)=>{
        callback(res);
        if(res.status_code === 200){
            dispatch(loginDone(res.data))
        }
    }).catch((err)=>{
        callback(null, err)
    })
}

const mapStateToProps = (state, ownProps) => {
    //console.log('mapstp', state)
    return {
        ...state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSingup: (isLogin) => {
            dispatch(changeSingup(isLogin))
        },
        login: (alreadyLogin)=>{
            dispatch(login(alreadyLogin))
        },
        requestProfile: (publicKey, callback)=>{
            requestProfile(dispatch, publicKey,callback)
        },
        increaseSequence: ()=>{
            dispatch(increaseSequence())
        },
        logout: ()=>{
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(User));