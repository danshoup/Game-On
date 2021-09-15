import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

class ChallengePage extends Component {
  render() {

    return (
      <>
      <Card>
      <Card.Img src="/img/697142-1@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <h1 className="text-center text-white">8-Ball</h1>
     <Form className="signUp-form text-white">
        <h1 className="font-weight-bold text-center text-white">Ian Hennessey vs. Diana Daghlas
        </h1>
      
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Who won?
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Ian Hennessey</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Diana Daghlas</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Tie</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder="Was there a score?"/>
        </Form.Group>


        
        <Button className="btn-lg">
          Submit Results
         </Button>
       
      

      </Form>

      </Card.ImgOverlay>

      </Card>









     
      </>
    )

  }
}

export default ChallengePage

