import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

class ChallengeCreate extends Component {
  render() {

    return (
      <Form className="signUp-form">
        <h1 className="font-weight-bold text-center">Matchup
        </h1>
        <h6>
          IAN H. VS. DANIEL S.
        </h6>
        <Form.Group>
          <Form.Label></Form.Label>
          <FormControl type="name" placeholder="Sports"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <FormControl type="email" placeholder="Pool"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <FormControl type="text" placeholder="8-Ball"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <FormControl type="text" placeholder="Billiards"/>
        </Form.Group>
        <Form.Group>
        <Form.Label for="exampleSearch"></Form.Label>
          <FormControl
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
        </Form.Group>
        <div className="d-grid gap-2">
        <Button variant="dark" size="lg">
          Create Matchup
         </Button>
        </div>
    
      {/* <h1>Here is the challenge create page</h1> */}
      {/* // <Form className="signUp-form">
      //   <h1 className="font-weight-bold text-center">Matchup
      //   </h1>
      //   <h6>
      //     IAN H. VS. DANIEL S.
      //   </h6>
      //   <FormGroup>
      //     <Label></Label>
      //     <Input type="name" placeholder="Sports"/>
      //   </FormGroup>
      //   <FormGroup>
      //     <Label></Label>
      //     <Input type="email" placeholder="Pool"/>
      //   </FormGroup>
      //   <FormGroup>
      //     <Label></Label>
      //     <Input type="text" placeholder="8-Ball"/>
      //   </FormGroup>
      //   <FormGroup>
      //     <Label></Label>
      //     <Input type="text" placeholder="Billiards"/>
      //   </FormGroup>
      //   <FormGroup>
      //   <Label for="exampleSearch"></Label>
      //     <Input
      //     type="search"
      //     name="search"
      //     id="exampleSearch"
      //     placeholder="search"
      //     />
      //   </FormGroup>
      //   <FormGroup>
      //     <Label></Label>
      //   </FormGroup>
      //   <Button className="btn-lg">
      //     Create Matchup
      //    </Button>
       
      
*/}
       </Form> 
    
    )

  }
}

export default ChallengeCreate

