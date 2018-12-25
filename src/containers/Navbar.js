import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendMoney } from '../actions/userActions';
import { showError } from '../actions/alertsActions';

const mapStateToProps = (state, ownProps) => {
  let canOpenPaymentModal = state.user.alreadyLogin ? true : false;
  let canOpenCreateAccountModal = state.user.alreadyLogin ? true : false;

  return {
    canOpenPaymentModal,
    canOpenCreateAccountModal,
    paymentData: {
      userData: {
        address: state.user.address || '',
        balance: state.user.balance || 0
      },
      paymentHistory: state.user.paymentHistory || []
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMoney: (receivingAddress, amount) => {
      dispatch(sendMoney(receivingAddress, amount))
    },
    showError: (error) => {
      dispatch(showError(error));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))