import { Container, Row } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import SingleCar from "../HomePage/SingleCar/SingleCar";

const ViewCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://secure-savannah-57360.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <h1 className="my-4">All Brand Cars</h1>
      <Container>
        <Row xs={1} md={3} className="g-4 mt-3">
          {cars.map((service) => (
            <SingleCar service={service} key={service.name}></SingleCar>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ViewCars;
