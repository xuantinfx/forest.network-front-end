import React, { Component, Fragment } from 'react';
import UploadImageModal from "../UploadImageModal";
// import PropTypes from 'prop-types'

export default class LogoUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: {
        isOpen: false
      },
      imgBinaryData: null
    }
  }

  _changeProfileAvatar = (file) => {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      this.setState({ imgBinaryData: e.target.result });
    }
  }

  _toggleModal = () => {
    this.setState((prevState) => {
      const prevIsOpen = prevState.modal.isOpen;
      return { modal: { isOpen: !prevIsOpen } }
    });
  }

  render() {
    return (
      <Fragment>
        <div className="AppContainer">
          <div className="ProfileCanopy-avatar" onClick={this._toggleModal}>
            <div className="ProfileAvatar">
              <div className="ProfileAvatar-container u-block js-tooltip profile-picture" >
                <img className="ProfileAvatar-image"
                  src={this.state.imgBinaryData
                    ? `data:image/jpeg;base64,${btoa(this.state.imgBinaryData)}`
                    : '/img/picturenotfound.png'}
                  alt="Name" />
              </div>
            </div>
          </div>
        </div>
        <UploadImageModal isOpen={this.state.modal.isOpen} toggle={this._toggleModal}
          existedImgData={this.state.imgBinaryData} sendImage={this._changeProfileAvatar} />
      </Fragment>
    )
  }
}
