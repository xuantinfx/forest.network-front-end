import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class LogoUser extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div className="AppContainer">
                <div className="ProfileCanopy-avatar">
                    <div className="ProfileAvatar">
                        <a className="ProfileAvatar-container u-block js-tooltip profile-picture" href="./template/aQltRN9T_400x400.jpg">
                            <img className="ProfileAvatar-image " src="./template/aQltRN9T_400x400.jpg" alt="YouTube" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
