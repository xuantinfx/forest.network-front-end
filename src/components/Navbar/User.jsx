import React, { Component } from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn';
// import PropTypes from 'prop-types'
import { Keypair, StrKey } from 'stellar-base'

export default class User extends Component {
    static propTypes = {
        
    }

    onClickOpenSignIn = ()=>{
      let li = document.getElementById('session').getElementsByTagName('li')[0];
      let att = li.getAttribute('class');
      if(att.includes('open')){
        this.props.changeSingup(true)
        li.setAttribute('class',"dropdown js-session")
      }
      else{
        li.setAttribute('class',"dropdown js-session open")
      }
    }

    reqLogin=(secretKey)=>{
        if(StrKey.isValidEd25519SecretSeed(secretKey)){
            let publicKey = Keypair.fromSecret(secretKey).publicKey();
            
            this.props.requestProfile(publicKey,(res)=>{
                if(res.status_code === 200){
                    window.localStorage.setItem('SECRET_KEY',secretKey)
                    this.props.login(true);
                    this.setUserName(publicKey,res.data.name)
                }
                else if(res.status_code === 202){
                    let alert = document.getElementById('alert-wrong-key')
                    alert.hidden = false;
                    alert.innerHTML= "Không tìm thấy tài khoản này!"
                }
                    //console.log(res)
            })
        }
        else{
            let alert = document.getElementById('alert-wrong-key')
            alert.hidden = false;
            alert.innerHTML= "Secret Key sai!"
        }
    }    

    setUserName = (publicKey, name)=>{
        let usernameItem= document.getElementById('nav-item-username')
        usernameItem.onclick = ()=>{
            this.props.history.push('/profile/'+publicKey)
        }
        
        let span = usernameItem.getElementsByTagName('span')[0];
        span.innerHTML = name;
    }

    logout = ()=>{
        window.localStorage.removeItem('SECRET_KEY');
        this.props.login(false);
        this.onClickOpenSignIn();
        this.props.history.push('/')
    }

    render() {
        console.log(this.props)
        return (
            <ul className="nav secondary-nav session-dropdown" id="session">

                {(!this.props.alreadyLogin)?(
                    <li className="dropdown js-session" >
                    <button className="dropdown-toggle js-dropdown-toggle dropdown-signin" 
                      onClick={this.onClickOpenSignIn}
                      id="signin-link" data-nav="login" aria-haspopup="true">
                      <small>Đã có tài khoản?</small> <span className="emphasize"> Đăng nhập</span>
                    </button>

                    {(this.props.isLogin)?(
                        <LogIn changeSingup={this.props.changeSingup} reqLogin={this.reqLogin}/>
                    ):
                    (
                        <SignUp changeSingup={this.props.changeSingup}/>
                    )}
                    </li>
                ):(
                    <li className="dropdown js-session" >
                        <div style={{cursor:'pointer'}} className="js-dropdown-toggle dropdown-signin" 
                        id="nav-item-username" data-nav="login" aria-haspopup="true">
                            <span className="emphasize" style={{fontWeight:'bold'}}>Vi Văn</span>
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
