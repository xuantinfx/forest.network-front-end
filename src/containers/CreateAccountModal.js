import CreateAccountModal from '../components/CreateAccountModal';
import { connect } from 'react-redux'
import { createNewAccount } from '../actions/userActions';

const mapDispatchToProps = (dispatch) => {
  return {
    createNewAccount: (newAddressToCreate) => {
      dispatch(createNewAccount(newAddressToCreate))
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateAccountModal)
