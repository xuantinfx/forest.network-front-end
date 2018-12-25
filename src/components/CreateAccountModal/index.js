import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';

export default class index extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
    createNewAccount: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      newAccountToCreate: ''
    };
  }

  _toggleModal = () => {
    this.props.toggle();
    this.setState({ newAccountToCreate: '' });
  }

  _handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewAccount(this.state.newAccountToCreate)
    this.setState({ newAccountToCreate: '' })
  }

  render() {
    return (
      <Modal size="lg" isOpen={this.props.isOpen} toggle={this._toggleModal} className={this.props.className}>
        <ModalHeader toggle={this._toggleModal}>Tạo tài khoản mới</ModalHeader>
        <ModalBody>
          <Container fluid>
            <Row>
              <Col>
                <form onSubmit={this._handleSubmit}>
                  <Row className="mt-2 justify-content-center">
                    <Col xs="12">
                      <div className="form-group">
                        <label>Tài khoản mới:</label>
                        <input required autoComplete={"off"} name="newAccountToCreate" className="form-control"
                          type="text" value={this.state.newAccountToCreate}
                          onChange={this._handleInputChange} />
                        <small className="form-text text-muted">Public key của tài khoản cần tạo</small>
                      </div>
                    </Col>
                    <Col xs="5">
                      <button className="EdgeButton EdgeButton--primary w-100" type="submit">Tạo mới</button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <button className="btn"
            onClick={this._toggleModal}>Hủy</button>
        </ModalFooter>
      </Modal>
    )
  }
}
