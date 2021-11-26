import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdmin = (e) => {
    const user = { email };
    fetch("https://secure-savannah-57360.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.value = "";
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="my-4 text-white"> Make Admin Page</h1>
      <Container>
        <form onSubmit={handleAdmin}>
          <input
            className="w-75 mx-2 p-2"
            type="email"
            name="email"
            onBlur={handleOnBlur}
          />
          <button className="btn btn-primary" type="submit">
            Make Admin
          </button>
        </form>

        {success && (
          <Alert variant="primary" className="my-3 w-50 mx-auto">
            Success Make a Admin
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default MakeAdmin;
