import React from "react";
import { Col, Nav, Navbar, Row } from "react-bootstrap";

import Myorder from "../Myorder/Myorder";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddCar from "../AddCar/AddCar";
import Pay from "../Pay/Pay";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../../AdminRoute/AdminRoute";
import Reviews from "../../HomePage/Reviews/Reviews";
import AllOrders from "../AllOrders/AllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";

const Dashboard = () => {
  const { admin } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <Row className="m-0">
      <Col md={2} xs={3} className="justify-content-center h-100 p-0">
        <Navbar
          bg="dark"
          variant="dark"
          className="justify-content-center"
          style={{ height: "100vh" }}
        >
          <Nav defaultActiveKey="/home" className="flex-column">
            {!admin && (
              <div>
                <Nav.Link as={Link} to={`${url}`}>
                  My Order
                </Nav.Link>

                <Nav.Link as={Link} to={`${url}/pay`}>
                  Pay
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/review`}>
                  Review
                </Nav.Link>
              </div>
            )}

            {admin && (
              <div>
                <Nav.Link as={Link} to={`${url}/makeAdmin`}>
                  Make Admin
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/addcar`}>
                  Add Car
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/allorders`}>
                  Manage All orders
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/manageproducts`}>
                  Manage Products
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar>
      </Col>
      <Col md={9} xs={8}>
        <Switch>
          <Route exact path={path}>
            <Myorder></Myorder>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addcar`}>
            <AddCar></AddCar>
          </AdminRoute>
          <AdminRoute path={`${path}/allorders`}>
            <AllOrders></AllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <Route path={`${path}/review`}>
            <Reviews></Reviews>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
        </Switch>
      </Col>
    </Row>
  );
};

export default Dashboard;
