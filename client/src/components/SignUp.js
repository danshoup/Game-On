import React, { Component } from 'react';
<<<<<<< HEAD
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class SignUp extends Component {
  render() {
    return (
      <Form className="signUp-form">
        <h1 className="font-weight-bold text-center">Game On
        </h1>
        <FormGroup>
          <Label>Full Name</Label>
          <Input type="name" placeholder="Full Name"/>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Zip Code</Label>
          <Input type="text" placeholder="Zip Code"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <Input type="password" placeholder="Password"/>
        </FormGroup> 
        <Button className="btn-lg btn-dark btn-block">
          Sign Up
        </Button>

      </Form>

    );
=======
import { Button, Form, FormGroup } from 'react-bootstrap';
import Input from "./Input";





class SignUp extends Component {
  render() {
    return (
        <h1 className="font-weight-bold text-center">Game On
        </h1>
        )
>>>>>>> main
  }
}

export default SignUp;