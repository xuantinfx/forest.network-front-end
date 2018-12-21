import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgFromArrayBuffer from '../ImgFromArrayBuffer';
import defaultName from '../../constants/defaultName';

export default class ProfileCardFollowing extends Component {
    static propTypes = {
        picture: PropTypes.object,
        isFollow: PropTypes.bool,
        name: PropTypes.string,
        description: PropTypes.string,
        isFollower: PropTypes.bool,
        follow: PropTypes.func,
        unFollow: PropTypes.func,
        address: PropTypes.string,
        alreadyLogin: PropTypes.bool
    }

    onClickBtn() {
        if (this.props.isFollow) {
            this.props.unFollow(this.props.address)
        } else {
            this.props.follow(this.props.address);
        }
    }

    onClickName(e) {
        e.preventDefault();
        this.props.onClickName(this.props.address);
    }

    render() {
        return (
            <div className="Grid-cell u-size1of2 u-lg-size1of3 u-mb10">
                <div className="js-stream-item">
                    <div className="ProfileCard js-actionable-user">
                        <a className="ProfileCard-bg js-nav" href="#/" onClick={this.onClickName.bind(this)} style={{ backgroundColor: "#0084B4", backgroundImage: `url(${this.props.urlCover}` }}>
                        </a>

                        <div className="ProfileCard-content">
                            <a className="ProfileCard-avatarLink js-nav js-tooltip" href="#/" onClick={this.onClickName.bind(this)}>
                                <ImgFromArrayBuffer className="ProfileCard-avatarImage js-action-profile-avatar" arrayBufferData={this.props.picture.data}
                                    alt="" />
                            </a>

                            {this.props.alreadyLogin && <div className="ProfileCard-actions">
                                <div className="ProfileCard-userActions with-rightCaret js-userActions">
                                    <div className="UserActions   UserActions--small u-textLeft">
                                        <div className="user-actions btn-group following not-muting including ">
                                            <span className="user-actions-follow-button js-follow-btn follow-button">
                                                <button type="button" className=" EdgeButton EdgeButton--primary EdgeButton--small button-text following-text"
                                                    onClick={this.onClickBtn.bind(this)}>
                                                    <span aria-hidden="true">{this.props.isFollow ? "Đang theo dõi" : "Theo dõi"}</span>
                                                </button>
                                                <button type="button" className=" EdgeButton EdgeButton--danger EdgeButton--small  button-text unfollow-text"
                                                    onClick={this.onClickBtn.bind(this)}>
                                                    <span aria-hidden="true">{this.props.isFollow ? "Ngừng theo dõi" : "Theo dõi"}</span>
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>}

                            <div className="ProfileCard-userFields">
                                <div className="ProfileNameTruncated account-group">
                                    <div className="u-textTruncate u-inlineBlock">
                                        <a className="fullname ProfileNameTruncated-link u-textInheritColor js-nav"
                                            href="#/" onClick={this.onClickName.bind(this)} data-aria-label-part="">{this.props.name || defaultName}</a></div><span className="UserBadges"></span>
                                </div>

                                <span className="ProfileCard-screenname">
                                    <a href="#/" onClick={this.onClickName.bind(this)} className="ProfileCard-screennameLink u-linkComplex js-nav"
                                        data-aria-label-part="">
                                        <span className="username u-dir" dir="ltr">@<b className="u-linkComplex-target">{this.props.name || defaultName}</b></span>
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
