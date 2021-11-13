import { Container, Row, Spinner } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import SingleCar from "../HomePage/SingleCar/SingleCar";

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("https://secure-savannah-57360.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoad(true);
      });
  }, []);

  return (
    <div>
      <h1 className="my-4">All Brand Cars</h1>
      <Container>
        {load ? (
          <Row xs={1} md={3} className="g-4 mt-3">
            {cars.map((service) => (
              <SingleCar service={service} key={service.name}></SingleCar>
            ))}
          </Row>
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Container>
    </div>
  );
};

export default ViewCars;
