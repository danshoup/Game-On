
import React, { Component, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import "./LoginWeb.css";
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
      <Card>
        <Card.Img src="/img/862202--1-@1x.png" alt="Carad image" />
        <Card.ImgOverlay>
        <Card.Img variant="top" src="/img/GameOnLogo.svg" />
        <Card.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control   
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
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
          <Card.Link className="text-center" href="/SignUp">Don't have an account? Click here!</Card.Link>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
    );
  };

export default Login