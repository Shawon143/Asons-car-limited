import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleReview = (props) => {
  const { name, details } = props.service;

  return (
    <div>
      <Col className="shadow mb-5 bg-body">
        <Card>
          <Card.Body>
            <Card.Title className="text-primary text-start">{name}</Card.Title>
            <Card.Text className="fw-bold justify mb-0 ">
              <h6>{details}</h6>
            </Card.Text>
            <Card.Text className="fw-bold justify mb-0 ">
              <i className="fas fa-star text-danger"></i>
              <i className="fas fa-star text-danger"></i>
              <i className="fas fa-star text-danger"></i>
              <i className="fas fa-star text-danger"></i>
              <i className="fas fa-star text-danger"></i>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleReview;
