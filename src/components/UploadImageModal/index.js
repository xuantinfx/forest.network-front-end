import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

export default class index extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    existedImgData: PropTypes.string,
    sendImage: PropTypes.func
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
        existedImgData: nextProps.existedImgData
      })
    }
    return true;
  }

  _onDrop = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      alert('File không hợp lệ');
      return;
    }
    this.setState({ files: acceptedFiles });

    //change image inside modal first
    this._changeImageInside(acceptedFiles[0]);

  }

  _changeImageInside = (file) => {
    let fileReader = new FileReader();
    try {
      fileReader.readAsBinaryString(file);
      fileReader.onload = (e) => {
        this.setState({ existedImgData: e.target.result });
      }
    }
    catch (err) {
      console.error(err);
      alert('File không hợp lệ')
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
            onDrop={this._onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <div className="ProfileAvatar mx-auto">
                  <div className="ProfileAvatar-container u-block js-tooltip profile-picture" >
                    <img className="ProfileAvatar-image" alt="Click để chọn ảnh"
                      src={this.state.existedImgData
                        ? `data:image/jpeg;base64,${btoa(this.state.existedImgData)}`
                        : '/img/picturenotfound.png'} />
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
