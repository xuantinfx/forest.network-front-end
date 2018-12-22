import React from 'react';
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap';

export default class AlertMessage extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(["error", "message"]),
        content: PropTypes.string,
        removeAlert: PropTypes.func,
        index: PropTypes.number
    }

    onDismiss() {
        this.props.removeAlert(this.props.index);
    }

    render() {
        return (
            <div>
                <Alert color={this.props.type === "message" ? "success" : "danger"} isOpen={true} toggle={this.onDismiss.bind(this)} fade={false}>
                    {this.props.content}
                </Alert>
            </div>
        );
    }
}