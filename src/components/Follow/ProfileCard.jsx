import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProfileCard extends Component {
  static propTypes = {
    urlCover: PropTypes.string,
    urlAvt: PropTypes.string,
    isFollow: PropTypes.bool,
    name: PropTypes.string,
    username: PropTypes.string,
    description: PropTypes.string
  }

  render() {
    return (
        <div className="Grid-cell u-size1of2 u-lg-size1of3 u-mb10">
            <div className="js-stream-item">
                <div className="ProfileCard js-actionable-user">
                    <a className="ProfileCard-bg js-nav" href="/ltsHarryPotter" style={{backgroundColor: "#0084B4", backgroundImage: `url(${this.props.urlCover}`}}>
                    </a>

                    <div className="ProfileCard-content">
                        <a className="ProfileCard-avatarLink js-nav js-tooltip" href="/ltsHarryPotter" title="Harry Potter">
                            <img className="ProfileCard-avatarImage js-action-profile-avatar" src={this.props.urlAvt}
                                alt="" />
                        </a>

                        <div className="ProfileCard-actions">
                            <div className="ProfileCard-userActions with-rightCaret js-userActions">
                                <div className="UserActions   UserActions--small u-textLeft">
                                    <div className="user-actions btn-group following not-muting including ">
                                        <span className="user-actions-follow-button js-follow-btn follow-button">
                                            <button type="button" className=" EdgeButton EdgeButton--primary EdgeButton--small button-text following-text">
                                                <span aria-hidden="true">Đang theo dõi</span>
                                                <span className="u-hiddenVisually">{this.props.isFollow ? "Đang theo dõi" : "Theo dõi"} <span
                                                        className="username u-dir u-textTruncate" dir="ltr">@<b>{this.props.username}</b></span></span>
                                            </button>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="ProfileCard-userFields">
                            <div className="ProfileNameTruncated account-group">
                                <div className="u-textTruncate u-inlineBlock">
                                    <a className="fullname ProfileNameTruncated-link u-textInheritColor js-nav"
                                        href="/ltsHarryPotter" data-aria-label-part="">
                                        Harry Potter</a></div><span className="UserBadges"></span>
                            </div>

                            <span className="ProfileCard-screenname">
                                <a href="/ltsHarryPotter" className="ProfileCard-screennameLink u-linkComplex js-nav"
                                    data-aria-label-part="">
                                    <span className="username u-dir" dir="ltr">@<b className="u-linkComplex-target">{this.props.username}</b></span>
                                </a><span>&rlm;</span>
                            </span>

                            <p className="ProfileCard-bio u-dir" dir="ltr" data-aria-label-part="">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
