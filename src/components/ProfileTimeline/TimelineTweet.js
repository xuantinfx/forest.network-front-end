import React, { Component } from 'react';
import moment from 'moment';

export default class TimelineTweet extends Component {
  render() {
    return (
      <li className="js-stream-item stream-item stream-item js-pinned" id="stream-item-tweet-1064310108413460480" data-item-id={1064310108413460480} data-item-type="tweet" data-suggestion-json="{'suggestion_details':{},'tweet_ids':'1064310108413460480','scribe_component':'tweet'}">
        <div className="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content original-tweet js-original-tweet tweet-has-context has-cards  user-pinned has-content" data-user-id={10228272} data-name="YouTube" data-screen-name="YouTube" data-has-cards="true" data-disclosure-type data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}}]" data-you-block="false" data-follows-you="false" data-you-follow="false" data-tweet-nonce="1064310108413460480-43247f11-d6d7-4591-9c56-c52467b4e1ab" data-conversation-id={1064310108413460480} data-permalink-path="/YouTube/status/1064310108413460480" data-item-id={1064310108413460480} data-tweet-id={1064310108413460480} data-tweet-stat-initialized="true">
          <div className="content">
            <div className="stream-item-header">
              <a className="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="https://twitter.com/YouTube" data-user-id={10228272}>
                <img className="avatar js-action-profile-avatar" alt={this.props.id} src={this.props.avatarUrl} />
                <span className="FullNameGroup">
                  <strong className="fullname show-popup-with-id u-textTruncate" data-aria-label-part>{this.props.displayName}</strong>
                  <span></span>
                  <span className="UserBadges">
                    <span className="Icon Icon--verified">
                      <span className="u-hiddenVisually">Tài khoản được xác nhận</span>
                    </span>
                  </span>
                  <span className="UserNameBreak">&nbsp;</span>
                </span>
                <span className="username u-dir u-textTruncate" data-aria-label-part>@<b>{this.props.username}</b></span>
              </a>
              <small className="time">
                <a title={moment(this.props.time).format('MMMM Do YYYY, h:mm:ss a')} className="tweet-timestamp js-permalink js-nav js-tooltip" href={this.props.tweetUrl} ><span className="_timestamp js-short-timestamp " data-aria-label-part="last" data-long-form="true">{moment(this.props.time).format('MMM Do YY')}</span></a>
              </small>
            </div>
            <div onClick={this.props.seeDetails} className="js-tweet-text-container">
              <p className="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part={0}>{this.props.content}</p>
            </div>
            <div onClick={this.props.seeDetails} className="AdaptiveMediaOuterContainer">
              <div className="AdaptiveMedia">
                <div className="AdaptiveMedia-container">
                  <img alt="" src={this.props.imgUrl} style={{ height: 'auto', maxWidth: '100%' }} />
                </div>
              </div>
            </div>
            <div className="stream-item-footer">
              <div className="ProfileTweet-actionList js-actions" role="group" aria-label="Thao tác Tweet">
                <div className="ProfileTweet-action ProfileTweet-action--reply">
                  <button className="ProfileTweet-actionButton js-actionButton js-actionReply" aria-describedby="profile-tweet-action-reply-count-aria-1064310108413460480" type="button" data-modal="ProfileTweet-reply">
                    <div title="Trả lời" className="IconContainer js-tooltip">
                      <span className="Icon Icon--medium Icon--reply" />
                      <span className="u-hiddenVisually">Trả lời</span>
                    </div>
                    <span className="ProfileTweet-actionCount">
                      <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{this.props.totalReplies}</span>
                    </span>
                  </button>
                </div>
                <div className="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
                  <button className="ProfileTweet-actionButton  js-actionButton js-actionRetweet" aria-describedby="profile-tweet-action-retweet-count-aria-1064310108413460480" type="button" data-modal="ProfileTweet-retweet">
                    <div title="Tweet lại" className="IconContainer js-tooltip">
                      <span className="Icon Icon--medium Icon--retweet" />
                      <span className="u-hiddenVisually">Tweet lại</span>
                    </div>
                    <span className="ProfileTweet-actionCount">
                      <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{this.props.totalRetweets}</span>
                    </span>
                  </button>
                </div>
                <div className="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
                  <button className="ProfileTweet-actionButton js-actionButton js-actionFavorite" aria-describedby="profile-tweet-action-favorite-count-aria-1064310108413460480" type="button">
                    <div title="Thích" className="IconContainer js-tooltip">
                      <span className="Icon Icon--heart Icon--medium" role="presentation" />
                      <div className="HeartAnimation" />
                      <span className="u-hiddenVisually">Thích</span>
                    </div>
                    <span className="ProfileTweet-actionCount">
                      <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{this.props.totalLikes}</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
