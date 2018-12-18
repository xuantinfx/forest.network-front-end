import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import Dropzone from 'react-dropzone';

export default class index extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Dropzone
            accept="image/jpeg, image/png"
            onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Try dropping some files here, or click to select files to upload.</p>
                <p>Only *.jpeg and *.png images will be accepted</p>
              </div>
            )}
          </Dropzone>
        </ModalBody>
        <ModalFooter>
          <button className="btn primary-btn"
            onClick={this.props.sendFile}>Cập nhật</button>
          <button className="btn"
            onClick={this.props.toggle}>Hủy</button>
        </ModalFooter>
      </Modal>
    )
  }
}
