import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const auth = getAuth();

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, pass);
    if (pass.length < 6) {
      setError("Password must be 6 characters ");
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        history.push(redirect_url);
        const user = result.user;
        console.log(user);
        setError("");
        setUserName();

        saveUser(email, name);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://secure-savannah-57360.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2 className="mt-3 text-white">Sign Up With your Email</h2>
      <Container className="text-start py-5 bg-dark my-5 card login-card w-50">
        <Form className="shadow p-4 text-white " onSubmit={handleRegistration}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onBlur={handleNameChange}
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="text-danger">{error}</div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className="pt-2">
            Already Have an account ? <Link to="/login">Sign in</Link>
          </p>
        </Form>

        <h3 className="my-3 text-center text-white">Or </h3>
        <Button>Google Sign in</Button>
      </Container>
    </div>
  );
};

export default Register;
