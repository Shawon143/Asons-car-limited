import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
// import SingleCar from "../../HomePage/SingleCar/SingleCar";
import ManageSingleProduct from "./ManageSingleProduct";

const ManageProducts = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://secure-savannah-57360.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <h1>Manage Products</h1>
      <Container>
        <Row xs={1} md={3} className="g-4 mt-3">
          {cars.map((service) => (
            <ManageSingleProduct
              service={service}
              key={service.name}
            ></ManageSingleProduct>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageProducts;
