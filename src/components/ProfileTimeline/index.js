import React, { Component } from 'react'
import TimelineTweet from './TimelineTweet';
import TweetDetail from '../TweetDetail';
import PostTweet from '../../containers/PostTweet';
import { Keypair } from 'stellar-base';
export default class ProfileTimeline extends Component {
  componentDidMount() {
    this.props.loadTweets(this.props.address);
  }

  onClickName(address) {
    this.props.history.push(`/profile/${address}`)
  }

  render() {
    if(this.props.isLoading) {
      return <div>Loading...</div>
    }

    let canEditProfile = false;
    try {
        //check if user is logged in and is on his page
        let address = this.props.address;
        let myAddress = Keypair.fromSecret(sessionStorage.getItem('SECRET_KEY')).publicKey();
        canEditProfile = (myAddress === address);
    }
    catch (err) { console.error(err); }

    return (
      <div className="Grid-cell u-lg-size3of3" data-test-selector="ProfileTimeline">
        <div className="ProfileHeading">
          <div className="ProfileHeading-spacer" />
          <div className="ProfileHeading-content">
            <h2 className="ProfileHeading-title u-hiddenVisually " id="content-main-heading">Tweet</h2>
            <ul className="ProfileHeading-toggle">
              <li className="ProfileHeading-toggleItem  is-active" data-element-term="tweets_toggle">
                <span aria-hidden="true">Tweet</span>
                <span className="u-hiddenVisually">Tweet, trang hiện tại.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ProfileTimeline" id="timeline">
          <div className="stream-container" data-min-position={1064977208970747908} data-max-position={1067919395173908480}>
            <div className="stream">
              <ol className="stream-items js-navigable-stream" id="stream-items-id">
                {canEditProfile && <PostTweet/>}
                {this.props.tweets.map((item, index) => {
                  return <TimelineTweet onClickName={this.onClickName.bind(this)} key={item._id} seeDetails={() => this.props.seeDetails(index)} {...item} />
                })}
              </ol>
            </div>
          </div>
        </div>
        {this.props.currentTweet && <TweetDetail isOpen={this.props.modalIsOpen} tweet={this.props.currentTweet} closeModal={this.props.closeModal} />}
      </div>
    )
  }
}
