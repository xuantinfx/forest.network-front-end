import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsedBandwidthByAccount, getMaxBandwidthByAccount } from '../../utilities/bandwidth';
import moment from 'moment';

class Bandwidth extends Component {
    showBandwidth() {
        let account = {
            bandwidth: this.props.bandwidth,
            bandwidthTime: this.props.bandwidthTime,
            balance: this.props.balance
        }
        return (getMaxBandwidthByAccount(account) - getUsedBandwidthByAccount(account, moment().unix())).toLocaleString() + " OXY";
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="ProfileHeaderCard-location">
                {/* <i className="fas fa-wifi" aria-hidden="true"></i> */}
                <span className="text-muted">
                    <i className="fas fa-wifi" aria-hidden="true" style={{width: 0}}/>
                </span>
                <span className="ProfileHeaderCard-locationText u-dir" >
                    {this.showBandwidth()}
                </span>
            </div>
        );
    }
}

Bandwidth.propTypes = {
    balance: PropTypes.number,
    bandwidth: PropTypes.number,
    bandwidthTime: PropTypes.number
};

export default Bandwidth;