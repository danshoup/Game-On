import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
class SignUp extends Component {
  render() {
    return (
      <Form className="signUp-form">
        <h1 className="font-weight-bold text-center">Game On
        </h1>
        <h6>
         Create an Account 
        </h6>
        <Form.Group>
          <Form.Label></Form.Label>
          <FormControl type="name" placeholder="Full Name"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <FormControl type="email" placeholder="Email"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <FormControl type="text" placeholder="Zip Code"/>
        </Form.Group>
        <Form.Group className="mb-3"  controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-grid gap-2">
        <Button variant="dark" size="lg">
          Create Matchup
         </Button>
        </div>
       
      

      </Form>
    );
  }
}

export default SignUp;