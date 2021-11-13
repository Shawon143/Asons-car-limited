import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner d-flex align-items-center">
      <div>
        <h1>WHY CHOOSE US!</h1>
        <p>
          We have tailored our services around what our community needs. Global
          Car Care is an excellent choice for European Vehicles, Diesel Trucks,
          Mercedes Sprinter Vans as well as all Domestic Vehicles.We believe in
          giving you the very best service for auto repair that you can find.
          That’s why we seek out and hire the very best auto repair
          technicians.We hear it all the time from our customers about how clean
          and organized we keep our shop. It’s true. We have worked hard to make
          our shop very functional and believe in a clean organized auto repair
          shop.
        </p>
        <Link to="/cars">
          <Button variant="secondary">View Cars</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
