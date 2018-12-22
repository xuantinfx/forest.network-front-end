import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMaxBandwidthByAccount } from '../../utilities/bandwidth';

class TotalBandwidth extends Component {
    showTotalBandwidth() {
        let account = {
            balance: this.props.balance
        }
        return getMaxBandwidthByAccount(account).toLocaleString() + " OXY";
    }
    render() {
        return (
            <div className="ProfileHeaderCard-location">
                {/* <i className="fas fa-warehouse" aria-hidden="true"></i> */}
                <span className="text-muted">
                    <i className="fas fa-warehouse" aria-hidden="true" style={{width: 0}}/>
                </span>
                <span className="ProfileHeaderCard-locationText u-dir" >
                    {this.showTotalBandwidth()}
                </span>
            </div>
        );
    }
}

TotalBandwidth.propTypes = {
    balance: PropTypes.number
};

export default TotalBandwidth;