import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProfileCardFollower extends Component {
  static propTypes = {
    urlCover: PropTypes.string,
    urlAvt: PropTypes.string,
    name: PropTypes.string,
    isFollow: PropTypes.bool,
    username: PropTypes.string,
  }

  render() {
    return (
    <div className="Grid-cell u-size1of2 u-lg-size1of3 u-mb10">
      <div className="js-stream-item">
          <div className="ProfileCard js-actionable-user">
              <a className="ProfileCard-bg js-nav" href="/AnhQuoc09" tabIndex="-1" style={{backgroundColor: "#1B95E0", backgroundImage: `url(${this.props.urlCover})`}}>g</a>
              <div className="ProfileCard-content">
                  <a className="ProfileCard-avatarLink js-nav js-tooltip" href="/AnhQuoc09" tabIndex="-1" aria-hidden="true"
                      data-original-title="Anh Quốc">
                      <img className="ProfileCard-avatarImage js-action-profile-avatar" src={this.props.urlAvt}
                          alt="" />
                  </a>
                  <div className="ProfileCard-actions">
                      <div className="ProfileCard-userActions with-rightCaret js-userActions">
                          <div className="UserActions   UserActions--small u-textLeft">
                              <div className="user-actions btn-group not-following not-muting can-dm ">
                                  <span className="UserActions-moreActions u-inlineBlock">
                                      <button type="button" className=" EdgeButton EdgeButton--secondary EdgeButton--small  button-text follow-text">
                                          {this.props.isFollow ? 
                                            (<span aria-hidden="true">Bỏ theo dõi</span>) 
                                            : (<span aria-hidden="true">Theo dõi</span>) }
                                      </button>
                                  </span>
                              </div>
                          </div>
  
                      </div>
                  </div>
  
                  <div className="ProfileCard-userFields">
                      <div className="ProfileNameTruncated account-group">
                          <div className="u-textTruncate u-inlineBlock">
                              <a className="fullname ProfileNameTruncated-link u-textInheritColor js-nav" href="/AnhQuoc09"
                                  data-aria-label-part="">
                                  {this.props.name}</a>
                          </div>
                      </div>
  
                      <span className="ProfileCard-screenname">
                          <a href="/AnhQuoc09" className="ProfileCard-screennameLink u-linkComplex js-nav"
                              data-aria-label-part="">
                              <span className="username u-dir" dir="ltr">@<b className="u-linkComplex-target">{this.props.username}</b></span>
                          </a><span>&rlm;</span> <span className="FollowStatus">Theo dõi bạn</span>
                      </span>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
