import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PhotoRailMediaBox from './PhotoRailMediaBox'

export class PhotoRail extends Component {
  static propTypes = {

  }

  render() {
    return (
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
            <PhotoRailMediaBox src="./template/DtCNMu_WwAEJ-TR.jpg_thumb"></PhotoRailMediaBox>
            <PhotoRailMediaBox src="./template/DtBw8f3WoAEaHeu.jpg_thumb"></PhotoRailMediaBox>
            <PhotoRailMediaBox src="./template/Ds7kdgZXcAUrGvp.jpg_thumb"></PhotoRailMediaBox>
            <PhotoRailMediaBox src="./template/Ds88vRxWkAEC5Nx.jpg_thumb"></PhotoRailMediaBox>
            <PhotoRailMediaBox src="./template/Ds7kdgZXcAUrGvp.jpg_thumb"></PhotoRailMediaBox>
            <PhotoRailMediaBox src="./template/Dss2HY-WoAET5qi.jpg_thumb"></PhotoRailMediaBox>
            {/* <span className="js-photoRailInsertPoint"></span> */}
        </div>
    </div>
    )
  }
}

export default PhotoRail
