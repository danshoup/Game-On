import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class ChallengeCreate extends Component {
  render() {

    return (
      <Form className="signUp-form">
        <h1 className="font-weight-bold text-center">Matchup
        </h1>
        <h6>
          IAN H. VS. DANIEL S.
        </h6>
        <FormGroup>
          <Label></Label>
          <Input type="name" placeholder="Sports"/>
        </FormGroup>
        <FormGroup>
          <Label></Label>
          <Input type="email" placeholder="Pool"/>
        </FormGroup>
        <FormGroup>
          <Label></Label>
          <Input type="text" placeholder="8-Ball"/>
        </FormGroup>
        <FormGroup>
          <Label></Label>
          <Input type="text" placeholder="Billiards"/>
        </FormGroup>
        <FormGroup>
        <Label for="exampleSearch"></Label>
          <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search"
          />
        </FormGroup>
        <FormGroup>
          <Label></Label>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">
          Create Matchup
         </Button>
       
      

      </Form>
    )

    return <h1>Welcome To Game On; this is the page to create a challenge</h1>

  }
}

export default ChallengeCreate

