
import React, { Component } from 'react'

class SignUpCallOut extends Component {

  render() {
    return (
        <div className="SignupCallOut module js-signup-call-out">
            <div className="SignupCallOut-header">
                <h3 className="SignupCallOut-title u-textBreak">
                    Mới dùng Twitter?
                </h3>
            </div>
            <div className="SignupCallOut-subheader">
                Đăng ký ngay bây giờ để có dòng thời gian cá nhân
                của bạn!
            </div>
            <div className="signup SignupForm">
                <a href="https://twitter.com/signup" role="button"
                    className="EdgeButton EdgeButton--large EdgeButton--primary SignupForm-submit u-block js-signup "
                    data-element="form">Đăng
                    ký</a>
            </div>
        </div>

    )
  }
}

export default SignUpCallOut
