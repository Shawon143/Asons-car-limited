import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
// import useAuth from "../../../hooks/useAuth";
// import { Link } from "react-router-dom";
// import "./singlecar.css";

const ManageSingleProduct = (props) => {
  const { _id, name, img, price, details } = props.service;
  // const { isLoading } = useAuth();

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`https://secure-savannah-57360.herokuapp.com/cars`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  // if (isLoading) {
  //   return <Spinner animation="border" variant="primary" />;
  // }

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure for you delete this car ?");
    if (confirm) {
      fetch(`https://secure-savannah-57360.herokuapp.com/cars/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingusers = cars.filter((cars) => cars._id !== id);
            setCars(remainingusers);
          }
        });
    }
  };

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
            <Card.Text className=" justify">
              <h5> BDT : {price}</h5>
            </Card.Text>
            <Card.Text className="text-start">
              <Button variant="danger" onClick={() => handleDelete(_id)}>
                Remove <i className="fas fa-arrow-right ms-1 mt-1"></i>
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ManageSingleProduct;
