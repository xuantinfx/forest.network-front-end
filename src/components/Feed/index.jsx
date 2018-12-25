import React, { Component } from 'react';
import FeedTweets from '../../containers/FeedTweets'
import { Keypair } from 'stellar-base';
import * as encodeDecodeSecretKey from '../../utilities/encodeDecodeSecretKey';

class Feed extends Component {
    render() {
        //console.log('feed',Keypair.fromSecret(encodeDecodeSecretKey.decode(sessionStorage.getItem('SECRET_KEY'));).publicKey())
        if(this.props.alreadyLogin)
            return (
                <div style={{margin: '0 10rem'}}>
                    <FeedTweets address={Keypair.fromSecret(encodeDecodeSecretKey.decode(sessionStorage.getItem('SECRET_KEY'))).publicKey()}></FeedTweets>
                </div>
            );
        else 
            return <div></div>
    }
}

export default Feed;