import Alerts from '../components/Alerts';
import { connect } from 'react-redux';
import { removeAlert } from '../actions/alertsActions';

const mapStateToProps = (state, ownProps) => {
    return {
        alerts: state.alerts.alerts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeAlert: (index) => {
            dispatch(removeAlert(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);