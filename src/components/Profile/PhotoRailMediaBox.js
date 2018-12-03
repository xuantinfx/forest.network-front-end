import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PhotoRailMediaBox extends Component {
  render() {
    return (
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
            <img src={this.props.src}
                alt="" style={{height: '83px', width: '83px', marginLeft: '0px', marginTop: '0px'}}/>
        </span>
    )
  }
}

export default PhotoRailMediaBox

PhotoRailMediaBox.propTypes ={
  src: PropTypes.string,
}