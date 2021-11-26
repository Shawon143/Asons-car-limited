import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SIngleFromOrders from "./SIngleFromOrders";

const AllOrders = () => {
  const [allorders, setAllorders] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("https://secure-savannah-57360.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => {
        setAllorders(data);
        setLoad(true);
      });
  }, []);

  return (
    <div>
      <h2 className="mt-4 text-white">ALl Orders : {allorders.length} </h2>

      <Container>
        {/* {load?():()} */}
        {load ? (
          <Row xs={1} md={2} className="g-4 mt-3">
            {allorders.map((service) => (
              <SIngleFromOrders
                service={service}
                key={service.name}
              ></SIngleFromOrders>
            ))}
          </Row>
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Container>
    </div>
  );
};

export default AllOrders;
