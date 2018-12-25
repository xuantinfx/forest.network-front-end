import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

class NavLeft extends Component {
    static propTypes = {
        openPaymentModal: PropTypes.func,
        openCreateAccountModal: PropTypes.func
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
                <li id="global-nav-about" className="about" onClick={this.props.openCreateAccountModal}>
                    <a className="js-tooltip js-dynamic-tooltip" href="#/" onClick={(e) => { e.preventDefault() }}>
                        <span className="text">Tạo tài khoản</span>
                    </a>
                </li>
                <li id="global-nav-about" className="about" onClick={this.props.openPaymentModal}>
                    <a className="js-tooltip js-dynamic-tooltip" href="#/" onClick={(e) => { e.preventDefault() }}>
                        <span className="text">Thanh toán</span>
                    </a>
                </li>
            </ul>
        )
    }
}

export default withRouter(NavLeft);
