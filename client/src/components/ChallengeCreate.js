import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class ChallengeCreate extends Component {
  render() {

    return (
      <>
      <Card>
      <Card.Img src="/img/862202--1-@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <h1 className="text-center text-white">Here is page to Create a Challenge</h1>
     <Form className="signUp-form text-white">
        <h1 className="font-weight-bold text-center text-white">Matchup
        </h1>
        <h6 className="font-weight-bold text-center text-white">
          IAN H. VS. DANIEL S.
        </h6>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder="Sports"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Pool"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="8-Ball"/>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Billiards"/>
        </Form.Group>
        <Form.Group>
        <Form.Label for="exampleSearch"></Form.Label>
          <Form.Control
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
        </Form.Group>
        <Button className="btn-lg">
          Create Matchup
         </Button>
       
      

      </Form>

      </Card.ImgOverlay>

      </Card>









     
      </>
    )

  }
}

export default ChallengeCreate

