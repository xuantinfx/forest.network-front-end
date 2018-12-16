import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class LogIn extends Component {
  static propTypes = {

  }

  onInputFileChange = (e)=>{
    let reader = new FileReader()

    reader.onload=(event)=>{
      //--------------------------
      //Gọi api đăng nhập
      console.log('json', JSON.parse(event.target.result))
    }

    reader.readAsText(e.target.files[0])
  }

  onClickChooseFile = ()=>{
    let input = document.getElementById('read-key')//document.createElement('input');
    input.setAttribute('type','file')
    //input.onchange = this.onInputFileChange
    var event = document.createEvent( 'MouseEvents' );
    event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    input.dispatchEvent( event );
  }

  render() {
    return (
        <div className="dropdown-menu dropdown-form dropdown-menu--rightAlign is-forceRight" id="signin-dropdown" role="dialog" aria-hidden="false" aria-labelledby="signin-form-legend"><div className="js-first-tabstop" tabIndex={0} />
        <div className="dropdown-caret right"> <span className="caret-outer" /> <span className="caret-inner" /> </div>
        <div className="signin-dialog-body">
          <div>Đã có tài khoản?</div>
          <form action="https://twitter.com/sessions" className="LoginForm js-front-signin" method="post" data-component="login_callout" data-element="form">
            <div className="LoginForm-input LoginForm-username">
              <input type="text" className="text-input email-input js-signin-email" name="session[username_or_email]" autoComplete="username" placeholder="Secret key" />
            </div>
            <div className="LoginForm-rememberForgot">
              <label>
                <input type="checkbox" defaultValue={1} name="remember_me" defaultChecked="checked" />
                <span>Ghi nhớ</span>
              </label>
            </div>
            <input type="submit" className="EdgeButton EdgeButton--primary EdgeButton--medium submit js-submit" value="Đăng nhập"/>
            <hr/>
            <input id= 'read-key' type='file' hidden={true} onChange={this.onInputFileChange}></input>
            <input className="EdgeButton EdgeButton--primary EdgeButton--medium submit js-submit" value="Read Key File" onClick={this.onClickChooseFile}/>
          </form>
          <hr />
          <div className="signup SignupForm">
            <div className="SignupForm-header">Mới sử dụng?</div>
            <input onClick={()=>this.props.changeSingup(false)} type='button' 
              className="EdgeButton EdgeButton--secondary EdgeButton--medium u-block js-signup" value="Đăng ký">
              
            </input>
          </div>
        </div>
        <div className="js-last-tabstop" tabIndex={0} /></div>
    )
  }
}

export default LogIn
