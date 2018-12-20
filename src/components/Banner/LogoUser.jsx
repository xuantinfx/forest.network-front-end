import React, { Component, Fragment } from 'react';
import UploadImageModal from "../UploadImageModal";
import ImgFromArrayBuffer from '../ImgFromArrayBuffer';
import PropTypes from 'prop-types'

export default class LogoUser extends Component {
  static propTypes = {
    imgData: PropTypes.object,
    canChangeProfilePicture: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      modal: {
        isOpen: false
      },
    }
  }

  _changeProfileAvatar = (file) => {
    let fileReader = new FileReader();
    try {
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        let result = Buffer.from(e.target.result);
        this.props.updateProfilePicture(result);
      }
    } catch (err) {
      alert('File không hợp lệ');
    }
  }

  _toggleModal = () => {
    if (!this.props.canChangeProfilePicture) return;
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
                <ImgFromArrayBuffer className="ProfileAvatar-image" arrayBufferData={this.props.imgData} />
              </div>
            </div>
          </div>
        </div>
        <UploadImageModal isOpen={this.state.modal.isOpen} toggle={this._toggleModal}
          existedImgData={this.props.imgBase64Data} sendImage={this._changeProfileAvatar} />
      </Fragment>
    )
  }
}
