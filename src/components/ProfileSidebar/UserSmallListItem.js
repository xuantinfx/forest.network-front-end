import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserSmallListItem extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="UserSmallListItem js-account-summary account-summary js-actionable-user"
        data-user-id="21447363" data-feedback-token=""
        data-impression-id="">
        <div className="UserSmallListItem-context">
        </div>

        <div className="content">
            <a className="account-group js-recommend-link js-user-profile-link user-thumb"
                href="https://twitter.com/katyperry"
                data-user-id="21447363" rel="noopener">

                <img className="avatar js-action-profile-avatar "
                    src="./template/9_8nIK5M_bigger.jpg"
                    alt=""/>
                <span className="account-group-inner"
                    data-user-id="21447363">
                    <strong className="fullname">KATY PERRY</strong><span
                        className="UserBadges"><span className="Icon Icon--verified"><span
                                className="u-hiddenVisually">Tài
                                khoản được xác nhận</span></span></span><span
                        className="UserNameBreak">&nbsp;</span><span
                        className="username u-dir u-textTruncate"
                        >@<b>katyperry</b></span>
                </span>
            </a>

        </div>
    </div>
    )
  }
}

export default UserSmallListItem
