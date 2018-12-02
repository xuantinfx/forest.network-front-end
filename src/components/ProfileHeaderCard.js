import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ProfileHeaderCard extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="ProfileHeaderCard">
            <h1 className="ProfileHeaderCard-name">
                <a href="https://twitter.com/YouTube" className="ProfileHeaderCard-nameLink u-textInheritColor js-nav">YouTube</a><span
                    className="ProfileHeaderCard-badges"><a href="https://twitter.com/help/verified"
                    className="js-tooltip" target="_blank" title="Tài khoản được xác nhận"
                    data-placement="right" rel="noopener"><span className="Icon Icon--verified"><span
                    className="u-hiddenVisually">Tài khoản được xác nhận</span></span></a></span>
            </h1>

            <h2 className="ProfileHeaderCard-screenname u-inlineBlock u-dir" >
                <a className="ProfileHeaderCard-screennameLink u-linkComplex js-nav"
                    href="https://twitter.com/YouTube">
                        <span className="username u-dir" >@<b className="u-linkComplex-target">YouTube</b></span>
                    </a>
            </h2>

            <p className="ProfileHeaderCard-bio u-dir" >Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone. <a href="https://twitter.com/hashtag/SaveYourInternet?src=hash"
                data-query-source="hashtag_click" className="twitter-hashtag pretty-link js-nav">
                <s>#</s><b>SaveYourInternet</b></a></p>

            <div className="ProfileHeaderCard-location ">
                <span className="Icon Icon--geo Icon--medium" aria-hidden="true" role="presentation"></span>
                <span className="ProfileHeaderCard-locationText u-dir" >
                    San Bruno, CA
                </span>
            </div>

            <div className="ProfileHeaderCard-url ">
                <span className="Icon Icon--url Icon--medium" aria-hidden="true" role="presentation"></span>
                <span className="ProfileHeaderCard-urlText u-dir"> <a className="u-textUserColor"
                        target="_blank" rel="me nofollow noopener" href="https://t.co/DyF7tJFG4h"
                        title="https://www.youtube.com/yt/saveyourinternet/">
                        youtube.com/yt/saveyourint…
                    </a>
                </span>
            </div>

            <div className="ProfileHeaderCard-joinDate">
                <span className="Icon Icon--calendar Icon--medium" aria-hidden="true"
                    role="presentation"></span>
                <span className="ProfileHeaderCard-joinDateText js-tooltip u-dir" 
                    title="13:43 - 13 thg 11, 2007">Đã tham gia tháng 11 năm 2007</span>
            </div>

            <div className="ProfileHeaderCard-birthdate u-hidden">
                <span className="Icon Icon--balloon Icon--medium" aria-hidden="true"
                    role="presentation"></span>
                <span className="ProfileHeaderCard-birthdateText u-dir" >
                </span>
            </div>
        </div>
    )
  }
}

export default ProfileHeaderCard
