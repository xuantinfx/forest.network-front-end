import React, { Component } from 'react';
import FeedTweets from '../../containers/FeedTweets'
import { Keypair } from 'stellar-base';
import { Row, Col } from 'reactstrap';

class Feed extends Component {
    render() {
        //console.log('feed',Keypair.fromSecret(sessionStorage.getItem('SECRET_KEY')).publicKey())
        if(this.props.alreadyLogin)
            return (
                <Row>
                    <Col sm='2'></Col>
                    <Col sm='8'>
                    <FeedTweets address={Keypair.fromSecret(sessionStorage.getItem('SECRET_KEY')).publicKey()}></FeedTweets>
                    </Col>
                    <Col sm='2'></Col>
                </Row>
            );
        else 
            return <div></div>
    }
}

export default Feed;