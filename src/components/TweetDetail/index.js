import React, { Component } from 'react';
import moment from 'moment';
import { Modal, ModalHeader, ModalBody, Row, Col, Input } from 'reactstrap';

export default class TweetDetail extends Component {
  render() {
    const tweet = this.props.tweet;
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.closeModal} className={this.props.className} size="lg">
        <ModalHeader toggle={this.props.closeModal}>Tweet</ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <Row className="align-items-center">
              <Col xs="1" className="pr-0">
                <img className="avatar" alt="" src={tweet.avatarUrl} />
              </Col>
              <Col className="account-group">
                <Row>
                  <Col>
                    <strong className="fullname show-popup-with-id u-textTruncate ">{tweet.displayName}</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>{tweet.username}</b></span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs="11">
                <p className="TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part="0">{tweet.content}</p>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs="11">
                <img alt="" src={tweet.imgUrl} className="img-fluid" />
              </Col>
              <Col xs="11">
                <span className="metadata">{moment(tweet.time).format("MMM Do YY")}</span>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <div className="stream-item-footer">
                  <div className="ProfileTweet-actionList js-actions" role="group" aria-label="Thao tác Tweet">
                    <div className="ProfileTweet-action ProfileTweet-action--reply">
                      <button className="ProfileTweet-actionButton js-actionButton js-actionReply" aria-describedby="profile-tweet-action-reply-count-aria-1064310108413460480" type="button" data-modal="ProfileTweet-reply">
                        <div title="Trả lời" className="IconContainer js-tooltip">
                          <span className="Icon Icon--medium Icon--reply" />
                          <span className="u-hiddenVisually">Trả lời</span>
                        </div>
                        <span className="ProfileTweet-actionCount">
                          <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{tweet.totalReplies}</span>
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
                          <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{tweet.totalRetweets}</span>
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
                          <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{tweet.totalLikes}</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-4 align-items-center">
              <Col xs="1" className="pr-0">
                <img src={tweet.avatarUrl} alt="" className="avatar" />
              </Col>
              <Col xs="10">
                <Input type="text" name="reply" placeholder="Tweet your reply" />
              </Col>
            </Row>
            {tweet.loadedReplies.map((reply, index) => {
              return (
                <Row key={index} className="mt-3">
                  <Col xs="1" className="pr-0">
                    <img src={reply.avatarUrl} alt="" className="avatar" />
                  </Col>
                  <Col xs="10">
                    <Row>
                      <Col className="d-flex account-group">
                        <strong className="fullname show-popup-with-id u-textTruncate ">{reply.displayName}</strong>
                        <span className="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>{reply.username}</b></span>
                        <span>&nbsp;</span>
                        <small className="time">
                          <span className="_timestamp js-short-timestamp js-relative-timestamp">{moment(reply.time).startOf('hour').fromNow()}</span>
                        </small>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="TweetTextSize  js-tweet-text tweet-text" lang="en" data-aria-label-part="0">{reply.content}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )
            })}
          </div>
        </ModalBody>
      </Modal>
    )
  }
}
