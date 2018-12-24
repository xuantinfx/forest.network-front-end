import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ImgFromArrayBuffer from '../ImgFromArrayBuffer';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { MAX_IMAGE_SIZE, INVALID_IMAGE_ERROR_MESSAGE } from '../../constants/Image';

export default class index extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    existedImgData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    sendImage: PropTypes.func,
    showError: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      files: [],
      existedImgData: this.props.existedImgData
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.existedImgData !== this.state.existedImgData) {
      this.setState({
        files: [],
        existedImgData: nextProps.existedImgData
      })
    }
    return true;
  }

  _onDrop = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      this.props.showError(INVALID_IMAGE_ERROR_MESSAGE);
      return;
    }
    this.setState({ files: acceptedFiles });

    //change image inside modal first
    this._changeImageInside(acceptedFiles[0]);

  }

  _changeImageInside = (file) => {
    let fileReader = new FileReader();
    try {
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        let result = e.target.result;
        this.setState({ existedImgData: result });
      }
    }
    catch (err) {
      console.error(err);
      alert(INVALID_IMAGE_ERROR_MESSAGE)
    }
  }

  _sendImage = () => {
    this.props.sendImage(this.state.files[0]);
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Cập nhật ảnh đại diện</ModalHeader>
        <ModalBody className="justify-content-center">
          <Dropzone multiple={false}
            accept="image/jpeg, image/png"
            maxSize={MAX_IMAGE_SIZE}
            onDrop={this._onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <div className="ProfileAvatar mx-auto">
                  <div className="ProfileAvatar-container u-block js-tooltip profile-picture" >
                    <ImgFromArrayBuffer className="ProfileAvatar-image" arrayBufferData={this.state.existedImgData} />
                  </div>
                </div>
              </div>
            )}
          </Dropzone>
        </ModalBody>
        <ModalFooter>
          <button className="btn primary-btn"
            onClick={this._sendImage}>Cập nhật</button>
          <button className="btn"
            onClick={this.props.toggle}>Hủy</button>
        </ModalFooter>
      </Modal>
    )
  }
}
