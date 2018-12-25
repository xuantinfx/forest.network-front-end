import React from 'react';
import { connect } from 'react-redux';
import * as socket from '../lib/socket';
import decodeSocket from '../lib/socket/decodeSocket';

class Socket extends React.Component {
    componentWillReceiveProps(nextProps) {
        if(this.props.address !== nextProps.address) {
            socket.disconnect();
            if(nextProps.address) {
                socket.connect(nextProps.address, (obj => {
                    decodeSocket(this.props.dispatch, obj);
                }));
            }
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        address: state.user.address
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Socket);