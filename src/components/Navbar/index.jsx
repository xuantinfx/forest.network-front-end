import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import PaymentModal from '../PaymentModal';

export default class Navbar extends Component {
    static propTypes = {
        canOpenPaymentModal: PropTypes.bool,
        paymentData: PropTypes.object,
        sendMoney: PropTypes.func,
        showError: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {
            paymentModalIsOpen: false,
        }
    }

    _togglePaymentModal = () => {
        if (!this.props.canOpenPaymentModal) {
            this.props.showError('Vui lòng đăng nhập');
            return;
        }
        this.setState((prevState) => {
            const prevIsOpen = prevState.paymentModalIsOpen;
            return { paymentModalIsOpen: !prevIsOpen }
        })
    }

    render() {
        return (
            <div className="topbar js-topbar">
                <div className="global-nav global-nav--newLoggedOut">
                    <div className="global-nav-inner">
                        <div className="container">
                            <NavLeft openPaymentModal={this._togglePaymentModal} />
                            <NavRight />
                        </div>
                    </div>
                </div>
                <PaymentModal isOpen={this.state.paymentModalIsOpen} toggle={this._togglePaymentModal}
                    userData={this.props.paymentData.userData} paymentHistory={this.props.paymentData.paymentHistory}
                    sendMoney={this.props.sendMoney} />
            </div>
        )
    }
}
