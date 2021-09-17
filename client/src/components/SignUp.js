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
    return (
      <>
      <Card>
      <Card.Img src="/img/862202--1-@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <Form onSubmit={handleFormSubmit} className="SignUp-form">
        <h1 className="font-weight-bold text-center text-white">Game On Sign-Up Page
        </h1>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control 
          type="name" 
          placeholder="Full Name"
          name="name"
          id="email"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control           
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Zip Code"
            name="zipCode"
            id="email"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control     
            placeholder="******"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}/>
      </Form.Group>
        <Button type="submit" className="btn-lg btn-dark btn-block">
          Sign Up
        </Button>

      </Form>

      </Card.ImgOverlay>

      </Card>
      </>
    );
  }

export default SignUp;