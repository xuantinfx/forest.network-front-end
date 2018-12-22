import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class index extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
    userData: {
      address: PropTypes.string,
      balance: PropTypes.number
    },
    paymentHistory: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      receivingAddress: '',
      amount: 0
    };
  }

  _toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  _handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _reset = () => {
    this.setState({
      activeTab: '1',
      receivingAddress: '',
      amount: 0
    })
  }

  _sendMoney = () => {
    const { receivingAddress, amount } = this.state;
    console.log(receivingAddress, amount);

  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Tất tần tật về tiền</ModalHeader>
        <ModalBody>
          <Container fluid>
            <Row>
              <Col>
                <div>
                  <Nav tabs className="float-none">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this._toggleTab('1'); }}
                      >
                        Chuyển khoản
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this._toggleTab('2'); }}
                      >
                        Lịch sử
                       </NavLink>
                    </NavItem>
                  </Nav>
                  {/* Tab 1 */}
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      {/* <Row>
                        <Col>Số dư: <span>10000</span></Col>
                      </Row> */}
                      <Row className="mt-2 justify-content-center">
                        <Col xs="12">
                          <div className="form-group">
                            <label>Tài khoản gửi</label>
                            <input name="userAddress" className="form-control" readOnly type="text" value="asdsad" />
                          </div>
                        </Col>
                        <Col xs="12">
                          <div className="form-group">
                            <label>Tài khoản nhận</label>
                            <input name="receivingAddress" className="form-control"
                              value={this.state.receivingAddress}
                              onChange={this._handleInputChange} />
                          </div>
                        </Col>
                        <Col xs="12">
                          <div className="form-group">
                            <label>Số tiền gửi</label>
                            <input name="amount" className="form-control" type="number"
                              value={this.state.amount}
                              onChange={this._handleInputChange} />
                            <small className="form-text text-muted">{`Đơn vị: Cellulose (CEL)`}</small>
                          </div>
                        </Col>
                        <Col xs="5">
                          <button className="EdgeButton EdgeButton--primary w-100" onClick={this._sendMoney}>Gửi tiền</button>
                        </Col>
                      </Row>
                    </TabPane>
                    {/* Tab 2 */}
                    <TabPane tabId="2">
                      <Row className="mt-2">
                        <Col>asdasd</Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <button className="btn"
            onClick={this.props.toggle}>Hủy</button>
        </ModalFooter>
      </Modal>
    )
  }
}
