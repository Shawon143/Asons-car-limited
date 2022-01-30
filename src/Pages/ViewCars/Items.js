import React, { useState } from "react";
import { useEffect } from "react";
import { Button, FormControl, InputGroup, Row, Spinner } from "react-bootstrap";
import SingleCar from "../HomePage/SingleCar/SingleCar";

const Items = ({ cars, load }) => {
  const [items, setItems] = useState(cars);
  const [search, setSearch] = useState("");

  const filter = (item) => {
    const updateitem = cars.filter((currentitem) => {
      return currentitem.catagory === item;
    });
    setItems(updateitem);
  };

  useEffect(() => {
    const feat = cars.filter((currentitem) => {
      return currentitem.name.toLowerCase().includes(search.toLowerCase());
    });

    setItems(feat);
  }, [search, cars]);

  // const feat = cars.filter((currentitem) => {
  //   return currentitem.name.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <div className="text-white">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search car"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <Button variant="outline-secondary mx-3" id="button-addon2">
          Search
        </Button> */}
      </InputGroup>

      <Button className="my-2 mx-3" onClick={() => setItems(cars)}>
        All
      </Button>
      <Button onClick={() => filter("honda")}>HONDA</Button>
      <Button className="my-2 mx-3" onClick={() => filter("audi")}>
        AUDI
      </Button>
      <Button onClick={() => filter("mitsubishi")}>MITSUBISHI</Button>
      <Button className="my-2 mx-3" onClick={() => filter("toyota")}>
        TOYOTA
      </Button>
      <Button onClick={() => filter("kia")}>KIA</Button>
      <Button className="my-2 mx-3" onClick={() => filter("hyundai")}>
        HYUANDAI
      </Button>
      <Button onClick={() => filter("nissan")}>NISSAN</Button>

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
