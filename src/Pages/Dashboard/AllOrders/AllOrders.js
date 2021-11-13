import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SIngleFromOrders from "./SIngleFromOrders";

const AllOrders = () => {
  const [allorders, setAllorders] = useState([]);

  useEffect(() => {
    fetch("https://secure-savannah-57360.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setAllorders(data));
  }, []);

  return (
    <div>
      <h2 className="mt-4">ALl Orders : {allorders.length} </h2>

      <Container>
        <Row xs={1} md={3} className="g-4 mt-3">
          {allorders.map((service) => (
            <SIngleFromOrders
              service={service}
              key={service.name}
            ></SIngleFromOrders>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllOrders;
