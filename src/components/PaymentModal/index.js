import React, { Component } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Container,
  TabContent, TabPane, Nav, NavItem, NavLink, Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';

export default class index extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
    userData: PropTypes.shape({
      address: PropTypes.string,
      balance: PropTypes.number
    }),
    paymentHistory: PropTypes.array,
    sendMoney: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      receivingAddress: '',
      amount: 1
    };
  }

  _toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  _toggleModal = () => {
    this.props.toggle();
    this._reset();
  }

  _handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _reset = () => {
    this.setState({
      activeTab: '1',
      receivingAddress: '',
      amount: 1
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    this._sendMoney();
  }

  _sendMoney = () => {
    const { receivingAddress, amount } = this.state;
    //send tx
    this.props.sendMoney(receivingAddress, Math.round(amount));
    //reset state
    this._reset();
  }

  render() {
    const { userData, paymentHistory } = this.props;
    return (
      <Modal size="lg" isOpen={this.props.isOpen} toggle={this._toggleModal} className={this.props.className}>
        <ModalHeader toggle={this._toggleModal}>Tất tần tật về tiền</ModalHeader>
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
                        Lịch sử giao dịch
                       </NavLink>
                    </NavItem>
                  </Nav>
                  {/* Tab 1 */}
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <form onSubmit={this._handleSubmit}>
                        <Row className="mt-2 justify-content-center">
                          <Col xs="12">
                            <div className="form-group">
                              <label>Tài khoản chuyển tiền:</label>
                              <input name="userAddress" className="form-control" readOnly type="text" value={userData.address} />
                              <small className="form-text text-muted">{`Số dư: ${userData.balance} (CEL)`}</small>
                            </div>
                          </Col>
                          <Col xs="12">
                            <div className="form-group">
                              <label>Tài khoản nhận tiền:</label>
                              <input required
                                name="receivingAddress" className="form-control"
                                value={this.state.receivingAddress}
                                onChange={this._handleInputChange} />
                            </div>
                          </Col>
                          <Col xs="12">
                            <div className="form-group">
                              <label>Số tiền gửi:</label>
                              <input required
                                name="amount" className="form-control" type="number"
                                min={1} max={userData.balance}
                                value={this.state.amount}
                                onChange={this._handleInputChange} />
                              <small className="form-text text-muted">{`Đơn vị: Cellulose (CEL)`}</small>
                            </div>
                          </Col>
                          <Col xs="5">
                            <button className="EdgeButton EdgeButton--primary w-100" type="submit">Chuyển tiền</button>
                          </Col>
                        </Row>
                      </form>
                    </TabPane>
                    {/* Tab 2 */}
                    <TabPane tabId="2">
                      <Row className="mt-2" id="payment-history-container">
                        <Col xs="12 text-muted font-weight-bold">
                          <Row>
                            <Col xs="2">Thời gian</Col>
                            <Col xs="2">Loại GD</Col>
                            <Col xs="5">Tài khoản chuyển tiền/nhận tiền</Col>
                            <Col xs="3">Số tiền nhận/chuyển</Col>
                          </Row>
                        </Col>
                        <Col xs="12 mt-2" className="content">
                          {paymentHistory.map((item, index) => {
                            return (
                              <Row key={index} className="content-row mt-2">
                                <Col xs="2">{moment(item.time).format('llll')}</Col>
                                {item.amount > 0 ? <Col xs="2" className="text-success">Nhận tiền</Col> : <Col xs="2" className="text-danger">Chuyển tiền</Col>}
                                <Col xs="5">{item.fromOrTo}</Col>
                                {item.amount > 0 ? <Col xs="3" className="text-success">{item.amount}</Col> : <Col xs="3" className="text-danger">{item.amount}</Col>}
                              </Row>)
                          })}
                        </Col>
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
            onClick={this._toggleModal}>Hủy</button>
        </ModalFooter>
      </Modal>
    )
  }
}
