import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import { Col, Container, Row, Button, Modal } from "react-bootstrap";

import "./placeorder.css";
import useAuth from "../../hooks/useAuth";
import Reviews from "../HomePage/Reviews/Reviews";
import ProductReview from "./ProductReview/ProductReview";

const PlaceOrder = () => {
  const { carID } = useParams();
  const [car, setCar] = useState([]);
  useEffect(() => {
    fetch(`https://secure-savannah-57360.herokuapp.com/cars/${carID}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [carID]);

  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitOrders = (data) => {
    console.log(data);
    fetch("https://secure-savannah-57360.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });

    reset();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="single_service">
      <h1 className="text-white">Place Order</h1>
      <Container className="my-2">
        <Row>
          <Col>
            <Row>
              <h2 className="justify mb-5 text-white"> Your Booking </h2>
              <Col>
                <img src={car.img} alt="" />
              </Col>
              <Col className="justify text-white">
                <h3 className="text-primary text-start">{car.name}</h3>
                <h5>{car.details}</h5>
                <h5>
                  BDT <span className="text-danger">{car.price}</span>
                </h5>
                <Button variant="primary" onClick={handleShow}>
                  Submit Reviews
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Reviews</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="m-0">
                    <Reviews car={car}></Reviews>
                  </Modal.Body>
                </Modal>
              </Col>
            </Row>
          </Col>
          <Col className="text-start">
            <h2 className="text-center text-white">Shipment Details</h2>
            <form
              className="my-5 w-50 mx-auto card"
              onSubmit={handleSubmit(onSubmitOrders)}
            >
              <input
                className="form-control mb-3"
                defaultValue={user.displayName}
                placeholder="Your Name"
                {...register("name")}
              />
              <input
                className="form-control mb-3"
                defaultValue={user.email}
                placeholder="your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}

              {car.name && (
                <input
                  className="form-control mb-3"
                  placeholder="Package Name"
                  value={car.name}
                  {...register("CarName")}
                />
              )}

              {car.price && (
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="price"
                  defaultValue={car.price}
                  {...register("price")}
                />
              )}

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your Address"
                defaultValue=""
                {...register("address")}
              />
              <input
                className="form-control mb-3"
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              <input type="submit" />
            </form>
          </Col>
        </Row>

        <Container className="text-white">
          <ProductReview car={car}></ProductReview>
        </Container>
      </Container>
    </div>
  );
};

export default PlaceOrder;
