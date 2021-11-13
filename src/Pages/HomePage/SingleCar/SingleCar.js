import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./singlecar.css";

const SingleCar = (props) => {
  const { _id, name, img, price, details } = props.service;

  return (
    <div>
      <Col className="shadow mb-5 bg-body">
        <Card>
          <Card.Img variant="top" src={img} className="card-img" />
          <Card.Body>
            <Card.Title className="text-primary">{name}</Card.Title>
            <Card.Text className="fw-bold justify mb-0 ">
              <h6>{details}</h6>{" "}
            </Card.Text>
            <Card.Text className=" justify text-danger">
              <h5> BDT : {price}</h5>
            </Card.Text>
            <Card.Text className="text-start">
              <Link to={`/place/${_id}`}>
                <Button>
                  Purchase <i className="fas fa-arrow-right ms-1 mt-1"></i>
                </Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleCar;
