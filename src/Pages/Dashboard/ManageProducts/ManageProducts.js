import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import ManageSingleProduct from "./ManageSingleProduct";

const ManageProducts = () => {
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
      <h1 className="text-white my-3">Manage Products</h1>
      <Container>
        {load ? (
          <Row xs={1} md={3} className="g-4 mt-3">
            {cars.map((service) => (
              <ManageSingleProduct
                service={service}
                key={service.name}
              ></ManageSingleProduct>
            ))}
          </Row>
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Container>
    </div>
  );
};

export default ManageProducts;
