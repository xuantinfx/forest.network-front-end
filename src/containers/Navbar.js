import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendMoney } from '../actions/userActions';

const mapStateToProps = (state, ownProps) => {
  let canOpenPaymentModal = state.user.alreadyLogin ? true : false;

  return {
    canOpenPaymentModal,
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
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))