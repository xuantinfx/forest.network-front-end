import React, { Component } from 'react'
import TimelineTweet from './TimelineTweet';

const timelineTweetsDummy = [{
  id: '1',
  tweetUrl: '/tweet/1',
  displayName: 'YouTube',
  username: 'YouTube',
  avatarUrl: '/img/avatar_youtube.jpg',
  time: 1543912837331,
  content: 'Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone. Learn more about Article 13: https://youtu.be/lepYkDZ62OY #SaveYourInternet',
  imgUrl: '/img/tweet_youtube1.jpg',
  totalReplies: 12200,
  totalRetweets: 119,
  totalLikes: 14,
},
{
  id: '1',
  tweetUrl: '/tweet/1',
  displayName: 'YouTube',
  username: 'YouTube',
  avatarUrl: '/img/avatar_youtube.jpg',
  time: 1543912837331,
  content: 'Yayhooo ayashashd',
  imgUrl: '/img/tweet_youtube1.jpg',
  totalReplies: 12,
  totalRetweets: 3,
  totalLikes: 124,
},
{
  id: '1',
  tweetUrl: '/tweet/1',
  displayName: 'YouTube',
  username: 'YouTube',
  avatarUrl: '/img/avatar_youtube.jpg',
  time: 1543912837331,
  content: '#SaveTheWorld',
  imgUrl: '/img/tweet_youtube1.jpg',
  totalReplies: 203339,
  totalRetweets: 2102,
  totalLikes: 123123,
}]

export default class ProfileTimeline extends Component {
  render() {
    return (
      <div className="Grid-cell u-lg-size2of3" data-test-selector="ProfileTimeline">
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
                {timelineTweetsDummy.map((item) => {
                  return <TimelineTweet key={item.id} {...item} />
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
