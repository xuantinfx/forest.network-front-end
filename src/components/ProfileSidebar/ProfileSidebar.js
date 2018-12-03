import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileSidebar extends Component {
  render() {
    return (
    <div class="Grid-cell u-size1of3">
    <div class="Grid Grid--withGutter">
        <div class="Grid-cell">
            <div class="ProfileSidebar ProfileSidebar--withRightAlignment">

                <div class="MoveableModule">

                    <div class="SidebarCommonModules">

                        <div class="SignupCallOut module js-signup-call-out">
                            <div class="SignupCallOut-header">
                                <h3 class="SignupCallOut-title u-textBreak">
                                    Mới dùng Twitter?
                                </h3>
                            </div>
                            <div class="SignupCallOut-subheader">
                                Đăng ký ngay bây giờ để có dòng thời gian cá nhân
                                của bạn!
                            </div>
                            <div class="signup SignupForm">
                                <a href="https://twitter.com/signup" role="button"
                                    class="EdgeButton EdgeButton--large EdgeButton--primary SignupForm-submit u-block js-signup "
                                    data-component="signup_callout" data-element="form">Đăng
                                    ký</a>
                            </div>

                        </div>


                        <div class="RelatedUsers module">
                            <div class="RelatedUsers-header">
                                <h3 class="RelatedUsers-title">Bạn cũng có thể
                                    thích</h3>
                                ·
                                <button class="btn-link js-refresh-related-users"
                                    type="button">Tải lại</button>
                            </div>

                            <div class="RelatedUsers-users">
                                <div class="UserSmallListItem js-account-summary account-summary js-actionable-user"
                                    data-user-id="783214" data-feedback-token=""
                                    data-impression-id="">
                                    <div class="UserSmallListItem-context">
                                    </div>


                                    <div class="content">
                                        <a class="account-group js-recommend-link js-user-profile-link user-thumb"
                                            href="https://twitter.com/Twitter"
                                            data-user-id="783214" rel="noopener">

                                            <img class="avatar js-action-profile-avatar "
                                                src="./template/zRim1x6M_bigger.jpg"
                                                alt="">
                                            <span class="account-group-inner"
                                                data-user-id="783214">
                                                <strong class="fullname">Twitter</strong><span
                                                    class="UserBadges"><span class="Icon Icon--verified"><span
                                                            class="u-hiddenVisually">Tài
                                                            khoản được xác nhận</span></span></span><span
                                                    class="UserNameBreak">&nbsp;</span><span
                                                    class="username u-dir u-textTruncate"
                                                    >@<b>Twitter</b></span>
                                            </span>
                                        </a>

                                    </div>
                                </div>


                                <div class="UserSmallListItem js-account-summary account-summary js-actionable-user"
                                    data-user-id="21447363" data-feedback-token=""
                                    data-impression-id="">
                                    <div class="UserSmallListItem-context">
                                    </div>


                                    <div class="content">
                                        <a class="account-group js-recommend-link js-user-profile-link user-thumb"
                                            href="https://twitter.com/katyperry"
                                            data-user-id="21447363" rel="noopener">

                                            <img class="avatar js-action-profile-avatar "
                                                src="./template/9_8nIK5M_bigger.jpg"
                                                alt="">
                                            <span class="account-group-inner"
                                                data-user-id="21447363">
                                                <strong class="fullname">KATY PERRY</strong><span
                                                    class="UserBadges"><span class="Icon Icon--verified"><span
                                                            class="u-hiddenVisually">Tài
                                                            khoản được xác nhận</span></span></span><span
                                                    class="UserNameBreak">&nbsp;</span><span
                                                    class="username u-dir u-textTruncate"
                                                    >@<b>katyperry</b></span>
                                            </span>
                                        </a>

                                    </div>
                                </div>


                                <div class="UserSmallListItem js-account-summary account-summary js-actionable-user"
                                    data-user-id="813286" data-feedback-token=""
                                    data-impression-id="">
                                    <div class="UserSmallListItem-context">
                                    </div>


                                    <div class="content">
                                        <a class="account-group js-recommend-link js-user-profile-link user-thumb"
                                            href="https://twitter.com/BarackObama"
                                            data-user-id="813286" rel="noopener">

                                            <img class="avatar js-action-profile-avatar "
                                                src="./template/5g0FC8XX_bigger.jpg"
                                                alt="">
                                            <span class="account-group-inner"
                                                data-user-id="813286">
                                                <strong class="fullname">Barack
                                                    Obama</strong><span class="UserBadges"><span
                                                        class="Icon Icon--verified"><span
                                                            class="u-hiddenVisually">Tài
                                                            khoản được xác nhận</span></span></span><span
                                                    class="UserNameBreak">&nbsp;</span><span
                                                    class="username u-dir u-textTruncate"
                                                    >@<b>BarackObama</b></span>
                                            </span>
                                        </a>

                                    </div>
                                </div>


                                <div class="UserSmallListItem js-account-summary account-summary js-actionable-user"
                                    data-user-id="20536157" data-feedback-token=""
                                    data-impression-id="">
                                    <div class="UserSmallListItem-context">
                                    </div>


                                    <div class="content">
                                        <a class="account-group js-recommend-link js-user-profile-link user-thumb"
                                            href="https://twitter.com/Google"
                                            data-user-id="20536157" rel="noopener">

                                            <img class="avatar js-action-profile-avatar "
                                                src="./template/PSpUS-Hp_bigger.jpg"
                                                alt="">
                                            <span class="account-group-inner"
                                                data-user-id="20536157">
                                                <strong class="fullname">Google</strong><span
                                                    class="UserBadges"><span class="Icon Icon--verified"><span
                                                            class="u-hiddenVisually">Tài
                                                            khoản được xác nhận</span></span></span><span
                                                    class="UserNameBreak">&nbsp;</span><span
                                                    class="username u-dir u-textTruncate"
                                                    >@<b>Google</b></span>
                                            </span>
                                        </a>

                                    </div>
                                </div>


                                <div class="UserSmallListItem js-account-summary account-summary js-actionable-user"
                                    data-user-id="27260086" data-feedback-token=""
                                    data-impression-id="">
                                    <div class="UserSmallListItem-context">
                                    </div>


                                    <div class="content">
                                        <a class="account-group js-recommend-link js-user-profile-link user-thumb"
                                            href="https://twitter.com/justinbieber"
                                            data-user-id="27260086" rel="noopener">

                                            <img class="avatar js-action-profile-avatar "
                                                src="./template/bCps4HFV_bigger.jpg"
                                                alt="">
                                            <span class="account-group-inner"
                                                data-user-id="27260086">
                                                <strong class="fullname">Justin
                                                    Bieber</strong><span class="UserBadges"><span
                                                        class="Icon Icon--verified"><span
                                                            class="u-hiddenVisually">Tài
                                                            khoản được xác nhận</span></span></span><span
                                                    class="UserNameBreak">&nbsp;</span><span
                                                    class="username u-dir u-textTruncate"
                                                    >@<b>justinbieber</b></span>
                                            </span>
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>



                        <div class="module Trends trends">
                            <div class="trends-inner">
                                <div class="flex-module trends-container context-trends-container">
                                    <div class="flex-module-header">

                                        <h3><span class="trend-location js-trend-location">Xu
                                                hướng tại Toàn thế giới</span></h3>
                                    </div>
                                    <div class="flex-module-inner">
                                        <ul class="trend-items js-trends">
                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="Funes Mori"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:entity_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/search?q=%22Funes%20Mori%22&amp;src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        >Funes Mori</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        15,1&nbsp;N Tweet
                                                    </div>
                                                </a>

                                            </li>

                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="#صباح_الخميس"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:hashtag_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/hashtag/%D8%B5%D8%A8%D8%A7%D8%AD_%D8%A7%D9%84%D8%AE%D9%85%D9%8A%D8%B3?src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        dir="rtl">#صباح_الخميس</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        12,6&nbsp;N Tweet
                                                    </div>
                                                </a>

                                            </li>

                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="性格-16タイプ性格診断"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:entity_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/search?q=%E6%80%A7%E6%A0%BC-16%E3%82%BF%E3%82%A4%E3%83%97%E6%80%A7%E6%A0%BC%E8%A8%BA%E6%96%AD&amp;src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        >性格-16タイプ性格診断</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        35,7&nbsp;N Tweet
                                                    </div>
                                                </a>

                                            </li>

                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="Gimnasia"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:entity_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/search?q=Gimnasia&amp;src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        >Gimnasia</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        85,7&nbsp;N Tweet
                                                    </div>
                                                </a>

                                            </li>

                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="#SiLeyeranMisPensamientos"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:hashtag_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/hashtag/SiLeyeranMisPensamientos?src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        >#SiLeyeranMisPensamientos</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        15&nbsp;N Tweet
                                                    </div>
                                                </a>

                                            </li>

                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="#いい肉の日"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:hashtag_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/hashtag/%E3%81%84%E3%81%84%E8%82%89%E3%81%AE%E6%97%A5?src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        >#いい肉の日</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        96,6&nbsp;N Tweet
                                                    </div>
                                                </a>

                                            </li>

                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="#ISRO"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:hashtag_trend:taxi_worldwide_source:tweet_count_1000_10000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/hashtag/ISRO?src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        >#ISRO</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        2.640 Tweet
                                                    </div>
                                                </a>

                                            </li>

                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="pratto"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:entity_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/search?q=pratto&amp;src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        >pratto</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        12&nbsp;N Tweet
                                                    </div>
                                                </a>

                                            </li>

                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="#いいにくいことを言う日"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:hashtag_trend:taxi_worldwide_source:tweet_count_1000_10000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/hashtag/%E3%81%84%E3%81%84%E3%81%AB%E3%81%8F%E3%81%84%E3%81%93%E3%81%A8%E3%82%92%E8%A8%80%E3%81%86%E6%97%A5?src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        >#いいにくいことを言う日</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        4.996 Tweet
                                                    </div>
                                                </a>

                                            </li>

                                            <li class="trend-item js-trend-item  context-trend-item"
                                                data-trend-name="Copa Argentina"
                                                data-trends-id="-634244863065385003"
                                                data-trend-token=":location_request:entity_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">

                                                <a class="pretty-link js-nav js-tooltip u-linkComplex "
                                                    href="https://twitter.com/search?q=%22Copa%20Argentina%22&amp;src=tren"
                                                    data-query-source="trend_click">
                                                    <span class="u-linkComplex-target trend-name"
                                                        >Copa Argentina</span>


                                                    <div class="js-nav trend-item-context"></div>
                                                    <div class="js-nav trend-item-stats">
                                                        31,6&nbsp;N Tweet
                                                    </div>
                                                </a>

                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="Footer module roaming-module Footer--slim Footer--blankBackground">
                            <div class="flex-module">
                                <div class="flex-module-inner js-items-container">
                                    <ul class="u-cf">
                                        <li class="Footer-item Footer-copyright copyright">©
                                            2018 Twitter</li>
                                        <li class="Footer-item"><a class="Footer-link"
                                                href="https://twitter.com/about"
                                                rel="noopener">Giới thiệu</a></li>
                                        <li class="Footer-item"><a class="Footer-link"
                                                href="https://support.twitter.com/"
                                                rel="noopener">Trung tâm trợ giúp</a></li>
                                        <li class="Footer-item"><a class="Footer-link"
                                                href="https://twitter.com/tos" rel="noopener">Điều
                                                khoản</a></li>
                                        <li class="Footer-item"><a class="Footer-link"
                                                href="https://twitter.com/privacy"
                                                rel="noopener">Chính sách riêng tư</a></li>
                                        <li class="Footer-item"><a class="Footer-link"
                                                href="https://support.twitter.com/articles/20170514"
                                                rel="noopener">Cookie</a></li>
                                        <li class="Footer-item"><a class="Footer-link"
                                                href="https://support.twitter.com/articles/20170451"
                                                rel="noopener">Thông tin quảng cáo</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}

export default ProfileSidebar
