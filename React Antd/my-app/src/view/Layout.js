import React from "react";
import Nav from "../components/Nav";
import { Row, Col } from "antd";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Nav />
            {this.props.children}
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}
