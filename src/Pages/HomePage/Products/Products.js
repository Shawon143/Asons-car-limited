import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleCar from "../SingleCar/SingleCar";

const Products = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://secure-savannah-57360.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <h1 className="text-white ">Our Cars</h1>
      <hr />

      <Container>
        <Row xs={1} md={3} className="g-4 mt-3">
          {cars.slice(0, 6).map((service) => (
            <SingleCar service={service} key={service.name}></SingleCar>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
