import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserSmallListItem from './UserSmallListItem';

class RelatedUsers extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="RelatedUsers module">
            <div className="RelatedUsers-header">
                <h3 className="RelatedUsers-title">Bạn cũng có thể
                    thích</h3>
                ·
                <button className="btn-link js-refresh-related-users"
                    type="button">Tải lại</button>
            </div>

            <div className="RelatedUsers-users">
                <div className="UserSmallListItem js-account-summary account-summary js-actionable-user"
                    data-user-id="783214" data-feedback-token=""
                    data-impression-id="">
                    <div className="UserSmallListItem-context">
                    </div>

                    <div className="content">
                        <a className="account-group js-recommend-link js-user-profile-link user-thumb"
                            href="https://twitter.com/Twitter"
                            data-user-id="783214" rel="noopener">

                            <img className="avatar js-action-profile-avatar "
                                src="./template/zRim1x6M_bigger.jpg"
                                alt=""/>
                            <span className="account-group-inner"
                                data-user-id="783214">
                                <strong className="fullname">Twitter</strong><span
                                    className="UserBadges"><span className="Icon Icon--verified"><span
                                            className="u-hiddenVisually">Tài
                                            khoản được xác nhận</span></span></span><span
                                    className="UserNameBreak">&nbsp;</span><span
                                    className="username u-dir u-textTruncate"
                                    >@<b>Twitter</b></span>
                            </span>
                        </a>

                    </div>
                </div>


                <UserSmallListItem></UserSmallListItem>

                <div className="UserSmallListItem js-account-summary account-summary js-actionable-user"
                    data-user-id="813286" data-feedback-token=""
                    data-impression-id="">
                    <div className="UserSmallListItem-context">
                    </div>

                    <div className="content">
                        <a className="account-group js-recommend-link js-user-profile-link user-thumb"
                            href="https://twitter.com/BarackObama"
                            data-user-id="813286" rel="noopener">

                            <img className="avatar js-action-profile-avatar "
                                src="./template/5g0FC8XX_bigger.jpg"
                                alt=""/>
                            <span className="account-group-inner"
                                data-user-id="813286">
                                <strong className="fullname">Barack
                                    Obama</strong><span className="UserBadges"><span
                                        className="Icon Icon--verified"><span
                                            className="u-hiddenVisually">Tài
                                            khoản được xác nhận</span></span></span><span
                                    className="UserNameBreak">&nbsp;</span><span
                                    className="username u-dir u-textTruncate"
                                    >@<b>BarackObama</b></span>
                            </span>
                        </a>

                    </div>
                </div>

                <div className="UserSmallListItem js-account-summary account-summary js-actionable-user"
                    data-user-id="20536157" data-feedback-token=""
                    data-impression-id="">
                    <div className="UserSmallListItem-context">
                    </div>

                    <div className="content">
                        <a className="account-group js-recommend-link js-user-profile-link user-thumb"
                            href="https://twitter.com/Google"
                            data-user-id="20536157" rel="noopener">

                            <img className="avatar js-action-profile-avatar "
                                src="./template/PSpUS-Hp_bigger.jpg"
                                alt=""/>
                            <span className="account-group-inner"
                                data-user-id="20536157">
                                <strong className="fullname">Google</strong><span
                                    className="UserBadges"><span className="Icon Icon--verified"><span
                                            className="u-hiddenVisually">Tài
                                            khoản được xác nhận</span></span></span><span
                                    className="UserNameBreak">&nbsp;</span><span
                                    className="username u-dir u-textTruncate"
                                    >@<b>Google</b></span>
                            </span>
                        </a>

                    </div>
                </div>

                <div className="UserSmallListItem js-account-summary account-summary js-actionable-user"
                    data-user-id="27260086" data-feedback-token=""
                    data-impression-id="">
                    <div className="UserSmallListItem-context">
                    </div>

                    <div className="content">
                        <a className="account-group js-recommend-link js-user-profile-link user-thumb"
                            href="https://twitter.com/justinbieber"
                            data-user-id="27260086" rel="noopener">

                            <img className="avatar js-action-profile-avatar "
                                src="./template/bCps4HFV_bigger.jpg"
                                alt=""/>
                            <span className="account-group-inner"
                                data-user-id="27260086">
                                <strong className="fullname">Justin
                                    Bieber</strong><span className="UserBadges"><span
                                        className="Icon Icon--verified"><span
                                            className="u-hiddenVisually">Tài
                                            khoản được xác nhận</span></span></span><span
                                    className="UserNameBreak">&nbsp;</span><span
                                    className="username u-dir u-textTruncate"
                                    >@<b>justinbieber</b></span>
                            </span>
                        </a>

                    </div>
                </div>

            </div>
        </div>

    )
  }
}

export default RelatedUsers
