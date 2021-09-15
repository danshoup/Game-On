
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./LoginWeb.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';





class Login extends Component {
  render() {
    return (
      <>
      
      
      <Card>
        <Card.Img src="/img/862202--1-@1x.png" alt="Carad image" />
        <Card.ImgOverlay>
        <Card.Img variant="top" src="/img/gameonlogo-2@1x.png" />
        <Card.Body>
        <Form>
          <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
      </>
    );
  }
}

export default Login