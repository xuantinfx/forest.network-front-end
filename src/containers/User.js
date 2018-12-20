import User from "../components/Navbar/User";
import { connect } from 'react-redux'
import { changeSingup, login, loginDone, increaseSequence } from "../actions/userActions";
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
        increaseSequence: (dispatch)=>{
            dispatch(increaseSequence())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(User));