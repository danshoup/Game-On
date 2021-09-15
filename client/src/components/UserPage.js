import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

class UserPage extends Component {
  render() {

    return (
      <>
      <Card>
      <Card.Img src="/img/343962@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <h1 className="text-center text-white">Profile</h1>
     <Form className="signUp-form text-white">
      <Figure>
        <Figure.Image
         width={171}
          height={180}
          alt="171x180"
          src="/img/profileavatar.png"
          />
      </Figure>
        <h1 className="font-weight-bold text-center text-white">Ian Hennessey
        </h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Wins</th>
              <th>Loses</th>
              <th>Ties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24</td>
              <td>15</td>
              <td>2</td>
            </tr>
          </tbody>
        </Table>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Current Challenges
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Previous Challenges
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button className="btn-lg">
          Challenge Someone
         </Button>
       
      

      </Form>

      </Card.ImgOverlay>

      </Card>









     
      </>
    )

  }
}

export default UserPage