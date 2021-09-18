import React, { Component, useState } from 'react';
import { useMutation } from '@apollo/client';
// import "./LoginWeb.css";
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function SignUp(props) {
  const [formState, setFormState] = useState({ name: '', email: '', password: '', zipCode: '' });
  const [SignUp, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await SignUp({
        variables: { name: formState.name, email: formState.email, password: formState.password, zipCode: formState.zipCode },
      });
      const token = mutationResponse.data.addUser.token;
      console.log(token);
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

  const logo = {
    height: "20rem",
  }

  const signuptext = {
    fontFamily: "Good Times",
    color: "#00FC2A"
  }

  const text = {
    fontFamily: "Good Times",
    color: "#00FC2A",
    fontWeight: "900"
  }

  const textbox = {
    width: "500px",
    margin: "0 auto",
    marginBottom: "10px"
  }

  const signUpButton = {
    margin: "0 auto",
    display: "block",
    marginTop: "20px"
  }

  const backgroundImg = {
    margin: "0",
    padding: "0",
    minHeight: "100vh"
  }

    return (
      <>
    <Card bg="dark">
      <Card.Img style={backgroundImg} src="/img/344034@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <Form onSubmit={handleFormSubmit} className="SignUp-form">
      <Card.Img style={logo} variant="top" src="/img/GameOnLogo.svg" />

        <h1 style={signuptext} className="font-weight-bold text-center">Sign-Up Here!
        </h1>
        <Form.Group style={textbox}>
          <Form.Label style={text}>Full Name</Form.Label>
          <Form.Control 
          type="name" 
          placeholder="Full Name"
          name="name"
          id="email"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group style={textbox}>
          <Form.Label style={text}>Email</Form.Label>
          <Form.Control           
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange} />
        </Form.Group>
        <Form.Group style={textbox}>
          <Form.Label style={text}>Zip Code</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Zip Code"
            name="zipCode"
            id="email"/>
        </Form.Group>
        <Form.Group  style={textbox}>
          <Form.Label style={text}>Password</Form.Label>
          <Form.Control     
            placeholder="******"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}/>
      </Form.Group>
        <Button style={signUpButton} type="submit" className="btn-lg btn-Primary btn-block">
          Sign Up
        </Button>

      </Form>

      </Card.ImgOverlay>

    </Card>
      </>
    );
  }

export default SignUp;