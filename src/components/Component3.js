import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Component3 extends Component {
  static propTypes = {

  }

  render() {
    return (
    <div className="Grid-cell u-size1of3 u-lg-size1of4">
        <div className="Grid Grid--withGutter">
            <div className="Grid-cell">
                <div className="ProfileSidebar ProfileSidebar--withLeftAlignment">
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

                    <div className="PhotoRail" style={{display: 'block',}} data-loaded="true">
                        <div className="PhotoRail-heading">
                            <span className="Icon Icon--camera Icon--medium" aria-hidden="true"
                                role="presentation"></span>
                            <span className="PhotoRail-headingText PhotoRail-headingText--withCount">
                                <a href="https://twitter.com/YouTube/media" className="PhotoRail-headingWithCount js-nav">
                                    8.862 Ảnh và video </a>
                                <a href="https://twitter.com/YouTube/media" className="PhotoRail-headingWithoutCount js-nav">
                                    Ảnh và video
                                </a>
                            </span>
                        </div>
                        <div className="PhotoRail-mediaBox">
                            <span className="tweet-media-img-placeholder js-nav" data-status-id="1067508363590860807"
                                data-image-url="https://pbs.twimg.com/media/DtCNMu_WwAEJ-TR.jpg"
                                data-img-alt="" data-load-status="loaded" background-color="style: rgba(64,52,53,1.0)"
                                data-dominant-color="[64,52,53]" data-tweet-id="1067508363590860807"
                                data-item-id="1067508363590860807" data-permalink-path="/YouTube/status/1067508363590860807"
                                data-conversation-id="1067508363590860807" data-tweet-nonce="1067508363590860807-0547e1a8-4bc9-4fb9-bcdb-ec708e09a82b"
                                data-screen-name="YouTube" data-name="YouTube" data-user-id="10228272"
                                data-you-follow="false" data-follows-you="false" data-you-block="false"
                                data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}}]"
                                data-disclosure-type="" data-has-cards="true" href="/YouTube/media">
                                <div className="media-overlay"></div>
                                <img src="./template/DtCNMu_WwAEJ-TR.jpg_thumb"
                                    alt="" style={{height: '83px', width: '83px', marginLeft: '0px', marginTop: '0px'}}/>
                            </span>

                            <span className="tweet-media-img-placeholder js-nav" data-status-id="1067478350975897600"
                                data-image-url="https://pbs.twimg.com/media/DtBw8f3WoAEaHeu.jpg"
                                data-img-alt="" data-load-status="loaded" background-color="style: rgba(64,49,49,1.0)"
                                data-dominant-color="[64,49,49]" data-tweet-id="1067478350975897600"
                                data-item-id="1067478350975897600" data-permalink-path="/YouTube/status/1067478350975897600"
                                data-conversation-id="1067478350975897600" data-tweet-nonce="1067478350975897600-082e25fe-c9d0-4d78-b829-6fcae3c460ad"
                                data-screen-name="YouTube" data-name="YouTube" data-user-id="10228272"
                                data-you-follow="false" data-follows-you="false" data-you-block="false"
                                data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}}]"
                                data-disclosure-type="" data-has-cards="true" href="/YouTube/media">
                                <div className="media-overlay"></div>
                                <img src="./template/DtBw8f3WoAEaHeu.jpg_thumb"
                                    alt="" style={{height: '83px', width: '83px', marginLeft: '0px', marginTop: '0px'}}/>
                            </span>

                            <span className="tweet-media-img-placeholder js-nav" data-status-id="1067430164097683456"
                                data-image-url="https://pbs.twimg.com/media/DtBGBZUVAAIFUPO.jpg"
                                data-img-alt="" data-load-status="loaded" background-color="style: rgba(64,11,12,1.0)"
                                data-dominant-color="[64,11,12]" data-tweet-id="1067430164097683456"
                                data-item-id="1067430164097683456" data-permalink-path="/YouTube/status/1067430164097683456"
                                data-conversation-id="1067430164097683456" data-tweet-nonce="1067430164097683456-400044b4-7d00-4742-acec-75d6535dcb81"
                                data-screen-name="YouTube" data-name="YouTube" data-user-id="10228272"
                                data-you-follow="false" data-follows-you="false" data-you-block="false"
                                data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}}]"
                                data-disclosure-type="" data-has-cards="true" href="/YouTube/media">
                                <div className="media-overlay"></div>
                                <img src="./template/DtBGBZUVAAIFUPO.jpg_thumb"
                                    alt="" style={{height: '83px', width: '83px', marginLeft: '0px', marginTop: '0px'}}/>
                            </span>

                            <span className="tweet-media-img-placeholder js-nav" data-status-id="1067138634174873600"
                                data-image-url="https://pbs.twimg.com/media/Ds88vRxWkAEC5Nx.jpg"
                                data-img-alt="" data-load-status="loaded" background-color="style: rgba(64,43,34,1.0)"
                                data-dominant-color="[64,43,34]" data-tweet-id="1067138634174873600"
                                data-item-id="1067138634174873600" data-permalink-path="/YouTube/status/1067138634174873600"
                                data-conversation-id="1067138634174873600" data-tweet-nonce="1067138634174873600-570fd3cb-ef5d-422c-b539-27187fd9229e"
                                data-screen-name="YouTube" data-name="YouTube" data-user-id="10228272"
                                data-you-follow="false" data-follows-you="false" data-you-block="false"
                                data-mentions="NASAInSight" data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}},{'id_str':'407387443','screen_name':'NASAInSight','name':'NASAInSight','emojified_name':{'text':'NASAInSight','emojified_text_as_html':'NASAInSight'}}]"
                                data-disclosure-type="" data-has-cards="true" href="/YouTube/media">
                                <div className="media-overlay"></div>
                                <img src="./template/Ds88vRxWkAEC5Nx.jpg_thumb"
                                    alt="" style={{height: '83px', width: '83px', marginLeft: '0px', marginTop: '0px'}}/>
                            </span>

                            <span className="tweet-media-img-placeholder js-nav" data-status-id="1067041385906388992"
                                data-image-url="https://pbs.twimg.com/media/Ds7kdgZXcAUrGvp.jpg"
                                data-img-alt="" data-load-status="loaded" background-color="style: rgba(64,18,19,1.0)"
                                data-dominant-color="[64,18,19]" data-tweet-id="1067041385906388992"
                                data-item-id="1067041385906388992" data-permalink-path="/YouTube/status/1067041385906388992"
                                data-conversation-id="1067041385906388992" data-tweet-nonce="1067041385906388992-aeee08d0-d66b-4e5f-96f7-fde29569c0e4"
                                data-screen-name="YouTube" data-name="YouTube" data-user-id="10228272"
                                data-you-follow="false" data-follows-you="false" data-you-block="false"
                                data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}}]"
                                data-disclosure-type="" data-has-cards="true" href="/YouTube/media">
                                <div className="media-overlay"></div>
                                <img src="./template/Ds7kdgZXcAUrGvp.jpg_thumb"
                                    alt="" style={{height: '83px', width: '83px', marginLeft: '0px', marginTop: '0px'}}/>
                            </span>

                            <span className="tweet-media-img-placeholder js-nav" data-status-id="1066005390649901057"
                                data-image-url="https://pbs.twimg.com/media/Dss2HY-WoAET5qi.jpg"
                                data-img-alt="" data-load-status="loaded" background-color="style: rgba(38,37,31,1.0)"
                                data-dominant-color="[38,37,31]" data-tweet-id="1066005390649901057"
                                data-item-id="1066005390649901057" data-permalink-path="/YouTube/status/1066005390649901057"
                                data-conversation-id="1066005390649901057" data-tweet-nonce="1066005390649901057-9eb7e414-e942-4e8f-a2b5-dba2de9bb24a"
                                data-screen-name="YouTube" data-name="YouTube" data-user-id="10228272"
                                data-you-follow="false" data-follows-you="false" data-you-block="false"
                                data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}}]"
                                data-disclosure-type="" data-has-cards="true" href="/YouTube/media">
                                <div className="media-overlay"></div>
                                <img src="./template/Dss2HY-WoAET5qi.jpg_thumb"
                                    alt="" style={{height: '83px', width: '83px', marginLeft: '0px', marginTop: '0px'}}/>
                            </span>

                            <span className="tweet-media-img-placeholder js-nav" data-status-id="1065291793288347655"
                                data-image-url="https://pbs.twimg.com/media/DsitNU3X4AIunXO.jpg"
                                data-img-alt="" data-load-status="not-loaded" background-color="style: rgba(64,11,13,1.0)"
                                data-dominant-color="[64,11,13]" data-tweet-id="1065291793288347655"
                                data-item-id="1065291793288347655" data-permalink-path="/YouTube/status/1065291793288347655"
                                data-conversation-id="1065291793288347655" data-tweet-nonce="1065291793288347655-623481f7-e40c-4c1a-aace-77c772a28752"
                                data-screen-name="YouTube" data-name="YouTube" data-user-id="10228272"
                                data-you-follow="false" data-follows-you="false" data-you-block="false"
                                data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}}]"
                                data-disclosure-type="" data-has-cards="true" href="/YouTube/media">
                                <div className="media-overlay"></div>
                            </span>

                            <span className="tweet-media-img-placeholder js-nav" data-status-id="1064977208970747908"
                                data-image-url="https://pbs.twimg.com/media/DsePE2qWwAM9feg.jpg"
                                data-img-alt="" data-load-status="not-loaded" background-color="style: rgba(64,11,13,1.0)"
                                data-dominant-color="[64,11,13]" data-tweet-id="1064977208970747908"
                                data-item-id="1064977208970747908" data-permalink-path="/YouTube/status/1064977208970747908"
                                data-conversation-id="1064977208970747908" data-tweet-nonce="1064977208970747908-f7e6d2cb-f71d-4c7f-ad4e-493acdda37a1"
                                data-screen-name="YouTube" data-name="YouTube" data-user-id="10228272"
                                data-you-follow="false" data-follows-you="false" data-you-block="false"
                                data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}}]"
                                data-disclosure-type="" data-has-cards="true" href="/YouTube/media">
                                <div className="media-overlay"></div>
                            </span>

                            <span className="tweet-media-img-placeholder js-nav" data-status-id="1063563586965069825"
                                data-image-url="https://pbs.twimg.com/media/DsKI8T-W0AAPUQR.jpg"
                                data-img-alt="" data-load-status="not-loaded" background-color="style: rgba(64,45,38,1.0)"
                                data-dominant-color="[64,45,38]" data-tweet-id="1063563586965069825"
                                data-item-id="1063563586965069825" data-permalink-path="/YouTube/status/1063563586965069825"
                                data-conversation-id="1063563586965069825" data-tweet-nonce="1063563586965069825-0e087a23-4462-4a87-a9b1-65c9c52d08d6"
                                data-screen-name="YouTube" data-name="YouTube" data-user-id="10228272"
                                data-you-follow="false" data-follows-you="false" data-you-block="false"
                                data-mentions="UN" data-reply-to-users-json="[{'id_str':'10228272','screen_name':'YouTube','name':'YouTube','emojified_name':{'text':'YouTube','emojified_text_as_html':'YouTube'}},{'id_str':'14159148','screen_name':'UN','name':'United Nations','emojified_name':{'text':'United Nations','emojified_text_as_html':'United Nations'}}]"
                                data-disclosure-type="" data-has-cards="true" href="/YouTube/media">
                                <div className="media-overlay"></div>
                            </span><span className="js-photoRailInsertPoint"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Component3
