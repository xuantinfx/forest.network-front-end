import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PhotoRailMediaBox extends Component {
  render() {
    return (
        <span className="tweet-media-img-placeholder js-nav"
            background-color="style: rgba(64,52,53,1.0)"
            href="/YouTube/media">
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