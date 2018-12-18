import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Keypair } from 'stellar-base'
import { createHash } from 'crypto'
import Blob from 'blob'
import jsonfile from "jsonfile"

export class SignUp extends Component {
  static propTypes = {

  }
  encode = ( s ) => {
    var out = [];
    for ( var i = 0; i < s.length; i++ ) {
      out[i] = s.charCodeAt(i);
    }
    return new Uint8Array( out );
  }

  saveJson = function(obj) {
    var str = JSON.stringify(obj);
    var data = this.encode( str );
    
    var blob = new Blob( [ data ], {
      type: 'application/octet-stream'
    });
    
    var url = URL.createObjectURL( blob );
    var link = document.createElement( 'a' );
    link.setAttribute( 'href', url );
    link.setAttribute( 'download', 'data.json' );
    var event = document.createEvent( 'MouseEvents' );
    event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent( event );
  }
  

  generateKey = ()=>{
    let key = Keypair.random();
    
    let keyJSON = {
      secretKey: key.secret(),
      publicKey: key.publicKey(),
      secretKeyBase64: key._secretKey.toString('base64'),
      publicKeyBase64: key._publicKey.toString('base64'),
      address: createHash('sha256')
      .update(key._publicKey)
      .digest().slice(0, 20)
      .toString('hex')
      .toUpperCase()
    }

    let secretKey = document.getElementById('secret-key');
    secretKey.value = keyJSON.secretKey
    let publicKey = document.getElementById('public-key');
    publicKey.value = keyJSON.publicKey
    
    this.saveJson(keyJSON)
  }

  render() {
    return (
        <div className="dropdown-menu dropdown-form dropdown-menu--rightAlign is-forceRight" id="signin-dropdown" role="dialog" aria-hidden="false" aria-labelledby="signin-form-legend"><div className="js-first-tabstop" tabIndex={0} />
        <div className="dropdown-caret right"> <span className="caret-outer" /> <span className="caret-inner" /> </div>
        <div className="signin-dialog-body">
          <div>Đã có tài khoản?</div>
            <input onClick={()=>this.props.changeSingup({isLogin:true})} type='button'
              className="EdgeButton EdgeButton--primary EdgeButton--medium submit js-submit" 
              value="Đăng nhập">
              
            </input>
          <hr/>
          <div>Chưa có tài khoản?</div>
          <form action="https://twitter.com/sessions" className="LoginForm js-front-signin" method="post" data-component="login_callout" data-element="form">
            <div className="LoginForm-input LoginForm-username">
              <input type="text" className="text-input email-input js-signin-email" name="session[username_or_email]" autoComplete="displayname" placeholder="Display name" />
              <input id='secret-key' disabled type="text" className="text-input email-input js-signin-email" name="session[username_or_email]" autoComplete="secretkey" placeholder="Secret key" />
              <input id='public-key' disabled type="text" className="text-input email-input js-signin-email" name="session[username_or_email]" autoComplete="publickey" placeholder="Public key" />
            
              <input onClick={this.generateKey} type='button' className="EdgeButton EdgeButton--secondary EdgeButton--medium u-block js-signup" value="Tạo key" />
            </div>
            <hr/>
            <input type="submit" className="EdgeButton EdgeButton--primary EdgeButton--medium submit js-submit" value="Đăng ký" />
          </form>
        </div>
        <div className="js-last-tabstop" tabIndex={0} /></div>
    )
  }
}

export default SignUp
