import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LogoUser from './LogoUser'

export default class ImgBanner extends Component {
    static propTypes = {
        urlImg: PropTypes.string
    }

    render() {
        return (
            <div className="ProfileCanopy-header u-bgUserColor" style={{ "marginTop": "0px" }}>
                <div className="ProfileCanopy-headerBg">
                    <img alt="" src={this.props.urlImg} style={{ "transform": "translate3d(0px, 10.8px, 0px)" }} />
                </div>
                <LogoUser/>
            </div>
        )
    }
}
