// import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Myorder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://secure-savannah-57360.herokuapp.com/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure for you delete this car ?");
    if (confirm) {
      fetch(`https://secure-savannah-57360.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingusers = orders.filter((orders) => orders._id !== id);

            setOrders(remainingusers);
          }
        });
    }
  };
  return (
    <div>
      <h3 className="my-3">
        Welcome <span className="text-primary">{user.displayName}</span> Your
        Order : {orders.length}{" "}
      </h3>
      <Container className="text-start">
        <ul>
          {orders.map((service) => (
            <li className="mb-4">
              <h1>{service.CarName}</h1>

              <h2>
                Price : <span className="text-primary">{service.price}</span>{" "}
              </h2>
              <Button
                onClick={() => handleDelete(service._id)}
                variant="danger"
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Myorder;
