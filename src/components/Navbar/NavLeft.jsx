import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types'

class NavLeft extends Component {
    static propTypes = {
        
    }

    onClick(e, href) {
        e.preventDefault();
        this.props.history.push(href);
    }

    render() {
        return (
            <ul className="nav js-global-actions" id="global-actions">
                <li className="home">
                    <a className="js-nav js-tooltip js-dynamic-tooltip" href="#/" onClick={e => this.onClick(e, '/')}>
                        <span className="Icon Icon--bird Icon--large"></span>
                        <span className="text">Trang chủ</span>
                    </a>
                </li>
                <li id="global-nav-about" className="about">
                    <a className="js-tooltip js-dynamic-tooltip"href="#/" onClick={e => this.onClick(e, '/about')}>
                        <span className="text">Giới thiệu</span>
                    </a>
                </li>
            </ul>
        )
    }
}

export default withRouter(NavLeft);
