import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./overview.css";

const Overview = () => {
  return (
    <div>
      <Container className="my-4 text-white">
        <h2>All the ways to find car chemistry</h2>
        <p className="my-3">
          We're your one-stop shop for buying and selling your car. Get matched
          to your perfect car, or sell one swiftly.
        </p>

        <Row className="justify mt-5">
          <Col>
            <Row>
              <Col md={2}>
                <div className="bg-white">
                  <img
                    className="overview_img text-white"
                    src="https://svgsilh.com/svg/1918554.svg"
                    alt=""
                  />
                </div>
              </Col>
              <Col md={10}>
                <h3 className="ms-3">Shop</h3>
              </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={10}>
                <p className="ms-3">
                  Find cars for sale, local dealers, and advice. Also, our
                  price-badging and price-drop notifications keep you informed
                  of potential deals.
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={2}>
                <div className="bg-white">
                  <img
                    className="overview_img"
                    src="https://svgsilh.com/svg_v2/35745.svg"
                    alt=""
                  />
                </div>
              </Col>
              <Col md={10}>
                <h3 className="ms-3">Service & Repair</h3>
              </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={10}>
                <p className="ms-3">
                  Watch do-it-yourself tutorials or find local repair options.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify mt-5">
          <Col>
            <Row>
              <Col md={2}>
                <img
                  className="overview_img"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </Col>
              <Col md={10}>
                <h3 className="ms-3">Certified Pre-Owned</h3>
              </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={10}>
                <p className="ms-3">
                  Learn why you should consider a Certified Pre-Owned car, and
                  get info on manufacturer programs.
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col md={2}>
                <img
                  className="overview_img"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </Col>
              <Col md={10}>
                <h3 className="ms-3">Sell</h3>
              </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={10}>
                <p className="ms-3">
                  Stay up to date on the latest selling advice from our experts.
                  Coming soon: Get your car appraised and sell to interested
                  buyers in your area.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
