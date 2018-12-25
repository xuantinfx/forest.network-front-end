import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import PaymentModal from '../PaymentModal';
import CreateAccountModal from '../../containers/CreateAccountModal';

export default class Navbar extends Component {
    static propTypes = {
        canOpenPaymentModal: PropTypes.bool,
        canOpenCreateAccountModal: PropTypes.bool,
        paymentData: PropTypes.object,
        sendMoney: PropTypes.func,
        showError: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {
            paymentModalIsOpen: false,
            createAccountModalIsOpen: false
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

    _toggleCreateAccountModal = () => {
        if (!this.props.canOpenCreateAccountModal) {
            this.props.showError('Vui lòng đăng nhập');
            return;
        }
        this.setState((prevState) => {
            const prevIsOpen = prevState.createAccountModalIsOpen;
            return { createAccountModalIsOpen: !prevIsOpen }
        })
    }

    render() {
        return (
            <div className="topbar js-topbar">
                <div className="global-nav global-nav--newLoggedOut">
                    <div className="global-nav-inner">
                        <div className="container">
                            <NavLeft openPaymentModal={this._togglePaymentModal} openCreateAccountModal={this._toggleCreateAccountModal} />
                            <NavRight />
                        </div>
                    </div>
                </div>
                <PaymentModal isOpen={this.state.paymentModalIsOpen} toggle={this._togglePaymentModal}
                    userData={this.props.paymentData.userData} paymentHistory={this.props.paymentData.paymentHistory}
                    sendMoney={this.props.sendMoney} />
                <CreateAccountModal isOpen={this.state.createAccountModalIsOpen} toggle={this._toggleCreateAccountModal} />
            </div>
        )
    }
}
