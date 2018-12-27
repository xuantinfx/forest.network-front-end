import React, { Component, Fragment } from 'react';
import UploadImageModal from "../UploadImageModal";
import ImgFromArrayBuffer from '../ImgFromArrayBuffer';
import PropTypes from 'prop-types'
import Jimp from 'jimp';
import { INVALID_IMAGE_ERROR_MESSAGE, MAX_IMAGE_SIZE } from '../../constants/Image';

export default class LogoUser extends Component {
  static propTypes = {
    imgData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    canChangeProfilePicture: PropTypes.bool.isRequired,
    showError: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      modal: {
        isOpen: false
      },
    }
  }

  _changeProfileAvatar = async (file) => {
    if (!file) {
      this._toggleModal();
      return;
    }
    let fileReader = new FileReader();
    let isLargeFile = file.size > (MAX_IMAGE_SIZE / 2);
    this.props.beginUpdateProfilePicture();
    try {
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = async (e) => {
        let result = Buffer.from(e.target.result);
        if (isLargeFile) {
          console.log('LARGE IMAGE FILE: ', result);
          try {
            //read image to jimp
            let image = await Jimp.read(result);
            //resize image
            image.resize(100, Jimp.AUTO);
            //get buffer result
            result = await image.getBufferAsync(Jimp.MIME_JPEG);
            console.log('SIZE-REDUCED IMAGE FILE: ', result);

            //finally, update
            this.props.updateProfilePicture(result);
          }
          catch (err) {
            console.log(err);
            this.props.showError('Xảy ra lỗi')
          }
        }
        else this.props.updateProfilePicture(result);
      }
    } catch (err) {
      this.props.showError(INVALID_IMAGE_ERROR_MESSAGE);
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
          existedImgData={this.props.imgData} sendImage={this._changeProfileAvatar}
          showError={this.props.showError} />
      </Fragment>
    )
  }
}
