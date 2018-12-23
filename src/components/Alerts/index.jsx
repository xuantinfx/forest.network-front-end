import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlertMessage from './AlertMessage';
import _ from 'lodash';

class Alerts extends Component {
    render() {
        return (
            <div style={{position: "fixed", zIndex: 1100, right: "10px", top: "70px"}}>
                {this.props.alerts && _.map(this.props.alerts, (alert, key) => {
                    return <AlertMessage type={alert.type} content={alert.content} index={key} key={key} removeAlert={this.props.removeAlert}/>
                })}
            </div>
        );
    }
}

Alerts.propTypes = {
    alerts: PropTypes.array,
    removeAlert: PropTypes.func
};

export default Alerts;