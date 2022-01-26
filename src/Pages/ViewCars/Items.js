import React, { useState } from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import SingleCar from "../HomePage/SingleCar/SingleCar";

const Items = ({ cars, load }) => {
  const [items, setItems] = useState(cars);

  const filter = (item) => {
    const updateitem = cars.filter((currentitem) => {
      return currentitem.catagory === item;
    });

    setItems(updateitem);
  };

  return (
    <div className="text-white">
      <Button className="mx-3" onClick={() => setItems(cars)}>
        All
      </Button>
      <Button onClick={() => filter("honda")}>honda</Button>
      <Button className="mx-3" onClick={() => filter("audi")}>
        audi
      </Button>
      <Button onClick={() => filter("mitsubishi")}>mitsubishi</Button>
      <Button className="mx-3" onClick={() => filter("toyota")}>
        toyota
      </Button>
      <Button onClick={() => filter("kia")}>kia</Button>
      <Button className="mx-3" onClick={() => filter("hyundai")}>
        hyundai
      </Button>
      <Button onClick={() => filter("nissan")}>nissan</Button>

      {load ? (
        <Row xs={1} md={4} className="g-4 mt-3">
          {items.map((service) => (
            <SingleCar service={service} key={service.name}></SingleCar>
          ))}
        </Row>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
};

export default Items;
