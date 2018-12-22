import React, { Component } from 'react';
import ImgFromArrayBuffer from '../ImgFromArrayBuffer';
import defaultName from '../../constants/defaultName';
import PropTypes from 'prop-types'

export default class TimelineTweet extends Component {
  static propTypes = {
    picture: PropTypes.object,
    name: PropTypes.string,
    postTweet: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      content: ""
    }
  }

  componentDidMount() {
    // resize textarea
    var tx = document.getElementsByTagName('textarea');
    for (var i = 0; i < tx.length; i++) {
      tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;width: 100%;resize: none;');
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    }
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  onSubmit() {
    this.props.postTweet(this.state.content);
    this.setState({
      content: ""
    })
  }

  render() {
    return (
      <li className="js-stream-item stream-item stream-item js-pinned" id="stream-item-tweet-1064310108413460480" data-item-id={1064310108413460480} data-item-type="tweet">
        <div className="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content original-tweet js-original-tweet tweet-has-context has-cards  user-pinned has-content" data-user-id={10228272} data-name="YouTube" data-screen-name="YouTube" data-has-cards="true" >
          <div className="content">
            <div className="stream-item-header">
              <span className="account-group js-account-group js-action-profile js-user-profile-link js-nav" data-user-id={10228272}>
                <ImgFromArrayBuffer className="avatar js-action-profile-avatar" alt={""} arrayBufferData={this.props.picture.data} />
                <span className="FullNameGroup">
                  <strong className="fullname show-popup-with-id u-textTruncate" data-aria-label-part>{this.props.name || defaultName}</strong>
                </span>
              </span>
            </div>
            <div className="AdaptiveMediaOuterContainer">
                  <textarea 
                    value={this.state.content} 
                    onChange={this.onChangeContent.bind(this)} 
                    style={{ width: "100%" }}
                    placeholder={"Cập nhật cảm nghĩ của bạn"}
                    />
            </div>
            <div className="stream-item-footer">
              <div className="ProfileTweet-actionList js-actions" role="group" aria-label="Thao tác Tweet">
                <div className="ProfileTweet-action ProfileTweet-action--favorite js-toggleState" style={{float: "right", marginRight: "20px"}}>
                  <button className="EdgeButton EdgeButton--secondary EdgeButton--medium button-text follow-text" aria-describedby="profile-tweet-action-favorite-count-aria-1064310108413460480" type="button"
                    onClick={this.onSubmit.bind(this)}>
                      <span>Đăng Tweet</span>
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
