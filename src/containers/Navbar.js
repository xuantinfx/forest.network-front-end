import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    canOpenPaymentModal: true,
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
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))