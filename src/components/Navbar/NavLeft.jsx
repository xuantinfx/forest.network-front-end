import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class NavLeft extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <ul className="nav js-global-actions" id="global-actions">
                <li className="home">
                    <a className="js-nav js-tooltip js-dynamic-tooltip" href="/">
                        <span className="Icon Icon--bird Icon--large"></span>
                        <span className="text">Trang chủ</span>
                    </a>
                </li>
                <li id="global-nav-about" className="about">
                    <a className="js-tooltip js-dynamic-tooltip"href="/about">
                        <span className="text">Giới thiệu</span>
                    </a>
                </li>
            </ul>
        )
    }
}
