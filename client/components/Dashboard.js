import React from "react";
import "./Dashboard.css";
import { Container, Row, Col } from "reactstrap";

const itemData = [
  {
    thumbnail: "/images/cars/tn/car1_tn.jpg"
  },
  {
    thumbnail: "/images/cars/tn/car2_tn.jpg"
  },
  {
    thumbnail: "/images/cars/tn/car3_tn.jpg"
  },
  {
    thumbnail: "/images/cars/tn/car4_tn.jpg"
  }
];

export default () => {
  return (
    <Container>
      <div className="dashboard-message">
        <h1 className="mb-3 text-secondary">Dashboard</h1>
        <p className="text-success">You are logged in now!</p>
      </div>
      <Row>
        <Col sm={12} md={3}>
          <img
            className="rounded-circle"
            src={itemData[0].thumbnail}
            alt="car thumbnail"
          />
        </Col>
        <Col sm={12} md={3}>
          <img
            className="rounded-circle"
            src={itemData[1].thumbnail}
            alt="car thumbnail"
          />
        </Col>
        <Col sm={12} md={3}>
          <img
            className="rounded-circle"
            src={itemData[2].thumbnail}
            alt="car thumbnail"
          />
        </Col>
        <Col sm={12} md={3}>
          <img
            className="rounded-circle"
            src={itemData[3].thumbnail}
            alt="car thumbnail"
          />
        </Col>
      </Row>
    </Container>
  );
};
