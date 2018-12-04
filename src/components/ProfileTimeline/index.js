import React, { Component } from 'react'
import TimelineTweet from './TimelineTweet';
import TweetDetail from '../TweetDetail';

export default class ProfileTimeline extends Component {
  render() {
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
              <li className="ProfileHeading-toggleItem  u-textUserColor" data-element-term="tweets_with_replies_toggle">
                <a className="ProfileHeading-toggleLink js-openSignupDialog js-nonNavigable" href="https://twitter.com/YouTube/with_replies" data-nav="tweets_with_replies_toggle">
                  Tweet &amp; trả lời
                      </a>
              </li>
              <li className="ProfileHeading-toggleItem  u-textUserColor" data-element-term="photos_and_videos_toggle">
                <a className="ProfileHeading-toggleLink js-openSignupDialog js-nonNavigable" href="https://twitter.com/YouTube/media" data-nav="photos_and_videos_toggle">
                  Phương tiện
                      </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ProfileTimeline" id="timeline">
          <div className="stream-container" data-min-position={1064977208970747908} data-max-position={1067919395173908480}>
            <div className="stream">
              <ol className="stream-items js-navigable-stream" id="stream-items-id">
                {this.props.tweets.map((item, index) => {
                  return <TimelineTweet key={item.id} seeDetails={() => this.props.seeDetails(index)} {...item} />
                })}
              </ol>
            </div>
          </div>
        </div>
        <TweetDetail isOpen={this.props.modalIsOpen} tweet={this.props.currentTweet} closeModal={this.props.closeModal} />
      </div>
    )
  }
}
