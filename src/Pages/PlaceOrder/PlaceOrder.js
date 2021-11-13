import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useParams } from "react-router";

import { Col, Container, Row } from "react-bootstrap";

import "./placeorder.css";
import useAuth from "../../hooks/useAuth";

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

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://secure-savannah-57360.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => result);
    reset();
  };

  return (
    <div className="single_service">
      <h1>Place Order</h1>
      <Container className="my-2">
        <Row>
          <Col>
            <Row>
              <h2 className="justify mb-5"> Your Booking </h2>
              <Col>
                <img src={car.img} alt="" />
              </Col>
              <Col className="justify">
                <h3 className="text-primary text-start">{car.name}</h3>
                <h5>{car.details}</h5>
                <h5>
                  BDT <span className="text-danger">{car.price}</span>
                </h5>
              </Col>
            </Row>
          </Col>
          <Col className="text-start">
            <h2 className="text-center">Shipment Details</h2>
            <form
              className="my-5 w-50 mx-auto card"
              onSubmit={handleSubmit(onSubmit)}
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
      </Container>
    </div>
  );
};

export default PlaceOrder;
