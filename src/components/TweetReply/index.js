import React, { Component } from 'react';
import ImgFromArrayBuffer from '../ImgFromArrayBuffer';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import defaultName from '../../constants/defaultName';
import { withRouter } from 'react-router-dom';

class TweetReply extends Component {
  static propTypes = {
    picture: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    fromAddress: PropTypes.string, //public address 
    name: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string
  }

  _handleClickName = (e) => {
    e.preventDefault();
    this.props.history.push(`/profile/${this.props.fromAddress}`)
  }

  render() {
    return (
      <Row className="mt-3">
        <Col xs="1" className="pr-0">
          <ImgFromArrayBuffer arrayBufferData={this.props.picture} alt="" className="avatar" />
        </Col>
        <Col xs="10">
          <Row>
            <Col className="d-flex account-group">
              <a className="fullname show-popup-with-id u-textTruncate" href="/#" onClick={this._handleClickName}>{this.props.name || defaultName}</a>
              <span className="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>{this.props.name}</b></span>
              <span>&nbsp;</span>
              <small className="time">
                <span className="_timestamp js-short-timestamp js-relative-timestamp">{moment(this.props.time).fromNow()}</span>
              </small>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="TweetTextSize  js-tweet-text tweet-text" lang="en" data-aria-label-part="0">{this.props.content}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default withRouter(TweetReply)
