import React, { Component } from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn';
// import PropTypes from 'prop-types'

export default class User extends Component {
    static propTypes = {
        
    }

    onClickOpenSignIn = ()=>{
      let li = document.getElementById('session').getElementsByTagName('li')[0];
      let att = li.getAttribute('class');
      if(att.includes('open')){
        li.setAttribute('class',"dropdown js-session")
      }
      else{
        li.setAttribute('class',"dropdown js-session open")
      }
    }

    render() {
        console.log(this.props)
        return (
            <ul className="nav secondary-nav session-dropdown" id="session">
                <li className="dropdown js-session" >
                  <button className="dropdown-toggle js-dropdown-toggle dropdown-signin" 
                      onClick={this.onClickOpenSignIn}
                      id="signin-link" data-nav="login" aria-haspopup="true">
                      <small>Đã có tài khoản?</small> <span className="emphasize"> Đăng nhập</span>
                  </button>
                    
                    {(this.props.isLogin)?(
                        <LogIn changeSingup={this.props.changeSingup}/>
                    ):
                    (
                        <SignUp changeSingup={this.props.changeSingup}/>
                    )}
                </li>
            </ul>
        )
    }
}
