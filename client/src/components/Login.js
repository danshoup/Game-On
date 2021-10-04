
import React, { Component, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);

      const home = window.location.origin;
      const newPage = home + "/userpage";
      window.location.href = newPage;

    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

const textbox = {
    width: "400px",
    margin: "0 auto",
    marginBottom: "0px",
    postition: "relative",
    top: "-125px"
}
const signup = {
    display: "block",
    textAlign: "center",
    color: "white"
}
const color = {
  color: "#00FC2A",
  fontWeight: "900",
  fontFamily: "good-times"
}
const backgroundImg = {
  margin: "0",
  padding: "0",
  minHeight: "100vh"
}

const logo = {
  display: "block",
  maxWidth: "800px",
  margin: "0 auto"

}


  return (
    <Card>
      <Card.Img style={backgroundImg} src="/img/80-s-retro@1x.png" fluid alt="Card image" />
      <Card.ImgOverlay>
      <Card.Img style={logo}  variant="top" src="/img/GameOnLogo.svg" />
      <Card.Body>
      <Form style={textbox} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
          <Form.Label style={color}>Email address</Form.Label>
          <Form.Control  
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange} />
          <Form.Text style={signup} bg="light">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
          <Form.Label style={color}>Password</Form.Label>
          <Form.Control  
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </Card.Body>
      <Card.Body>
        <Card.Link style={signup} bg="light" className="text-center" href="/SignUp">Don't have an account? Click here!</Card.Link>
      </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Login