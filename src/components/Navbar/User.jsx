import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class User extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <ul className="nav secondary-nav session-dropdown" id="session">
                <li className="dropdown js-session">
                    <a href="https://twitter.com/login" className="dropdown-toggle js-dropdown-toggle dropdown-signin"
                        role="button" id="signin-link" data-nav="login" aria-haspopup="true">
                        <small>Đã có tài khoản?</small> <span className="emphasize"> Đăng nhập</span><span
                            className="caret"></span>
                    </a>
                </li>
            </ul>
        )
    }
}
