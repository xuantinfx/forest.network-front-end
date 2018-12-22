import React, { Component } from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn';
// import PropTypes from 'prop-types'
import { Keypair, StrKey } from 'stellar-base';
import defaultName from '../../constants/defaultName';

export default class User extends Component {
    static propTypes = {
        
    }

    constructor(props){
        super(props);
        this.state = {
            isDropdownOpen: false,
            alert: ''
        }
        
        let key = sessionStorage.getItem('SECRET_KEY')
        if(key){
          this.reqLogin(key)
        }
    }

    onClickOpenSignIn = (close = false)=>{
        if(!close){
            this.setState({
                isDropdownOpen: !this.state.isDropdownOpen
            })
        }
        else{
            this.setState({
                isDropdownOpen: false
            })
        }
    }

    reqLogin=(secretKey)=>{
        if(StrKey.isValidEd25519SecretSeed(secretKey)){
            let publicKey = Keypair.fromSecret(secretKey).publicKey();
            
            this.props.requestProfile(publicKey,(res,err)=>{
                if(err){
                    this.setState({
                        alert: 'Không thể tìm thấy account này!'
                    })
                }
                else{
                    sessionStorage.setItem('SECRET_KEY',secretKey)
                    this.props.login(true);
                }
            })
        }
        else{
            this.setState({
                alert: 'Secret Key nhập sai!'
            })
        }
    }    

    onClickUser = ()=>{if(this.props.address) this.props.history.push('/profile/'+this.props.address)}

    logout = ()=>{
        sessionStorage.removeItem('SECRET_KEY');
        this.props.login(false);
        this.onClickOpenSignIn(true);
    }

    render() {
        console.log('user',this.props)
        return (
            <ul className="nav secondary-nav session-dropdown" id="session">

                {(!this.props.alreadyLogin)?(
                    <li className="dropdown js-session open" >
                    <button className="dropdown-toggle js-dropdown-toggle dropdown-signin" 
                      onClick={()=>this.onClickOpenSignIn()}
                      id="signin-link" data-nav="login" aria-haspopup="true">
                      <small>Đã có tài khoản?</small> <span className="emphasize"> Đăng nhập</span>
                    </button>

                    {(this.state.isDropdownOpen)?(
                        (this.props.isLogin)?(
                            <LogIn changeSingup={this.props.changeSingup} alert={this.state.alert} reqLogin={this.reqLogin}/>
                        ):
                        (
                            <SignUp changeSingup={this.props.changeSingup}/>
                        )
                    ):(<div/>)}
                    </li>
                ):(
                    <li className="dropdown js-session" >
                        <div style={{cursor:'pointer'}} className="js-dropdown-toggle dropdown-signin" 
                        data-nav="login" aria-haspopup="true">
                            <span className="emphasize"
                            onClick={this.onClickUser} style={{fontWeight:'bold'}}>{this.props.name||defaultName}</span>
                            <span onClick={this.logout} className="emphasize" style={{fontWeight:'bold', paddingLeft:'1rem'}}>
                                <i className="fas fa-sign-out-alt"></i>
                            </span>
                        </div>
                        
                    </li>
                )}
                
            </ul>
        )
    }
}
