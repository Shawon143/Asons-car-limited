import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleReview from "../../HomePage/HomeReview/SingleReview";

const ProductReview = ({ car }) => {
  const [reviews, setReviews] = useState([]);

  //   console.log(car.name);

  useEffect(() => {
    fetch(
      `https://secure-savannah-57360.herokuapp.com/review?CarName=${car.name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [car.name]);

  return (
    <div>
      <Container>
        <h2>Product review</h2>

        <Row xs={1} md={3} className="g-4 mt-3">
          {reviews.map((service) => (
            <SingleReview service={service} key={service.name}></SingleReview>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductReview;
