import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class SignUp extends Component {
  render() {
    return (
      <>
      <Card>
      <Card.Img src="/img/862202--1-@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <Form className="signUp-form">
        <h1 className="font-weight-bold text-center text-white">Game On Sign-Up Page
        </h1>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder="User Name"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Email"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Zip Code"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="Confirm Password"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
        </Form.Group> 
        <Button className="btn-lg btn-dark btn-block">
          Sign Up
        </Button>

      </Form>

      </Card.ImgOverlay>

      </Card>
      </>
    );
  }
}

export default SignUp;