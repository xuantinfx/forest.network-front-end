import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class index extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };
  }

  _toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Modal size='lg' isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
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
                        onClick={() => { this._toggle('1'); }}
                      >
                        Tab1
            </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this._toggle('2'); }}
                      >
                        Moar Tabs
            </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <h4>Tab 1 Contents</h4>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="6">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="6">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
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
            onClick={this.props.toggle}>Hủy</button>
        </ModalFooter>
      </Modal>
    )
  }
}
