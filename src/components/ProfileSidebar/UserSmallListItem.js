import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserSmallListItem extends Component {

  render() {
    return (
      <div className="UserSmallListItem js-account-summary account-summary js-actionable-user">
        <div className="UserSmallListItem-context">
        </div>

        <div className="content">
            <a className="account-group js-recommend-link js-user-profile-link user-thumb"
                href={this.props.profileLink} rel="noopener">

                <img className="avatar js-action-profile-avatar "
                    src={this.props.avatarSrc}
                    alt="avatar"/>
                <span className="account-group-inner">
                    <strong className="fullname">{this.props.fullname}</strong><span
                        className="UserBadges"><span className="Icon Icon--verified"><span
                                className="u-hiddenVisually">Tài
                                khoản được xác nhận</span></span></span><span
                        className="UserNameBreak">&nbsp;</span><span
                        className="username u-dir u-textTruncate"
                        >@<b>{this.props.username}</b></span>
                </span>
            </a>

        </div>
    </div>
    )
  }
}

export default UserSmallListItem

UserSmallListItem.propTypes ={
    profileLink: PropTypes.string,
    avatarSrc: PropTypes.string,
    fullname: PropTypes.string,
    username: PropTypes.string
}
