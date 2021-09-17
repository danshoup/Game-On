import React, { Component, useState } from 'react';
import { useQuery} from '@apollo/client';
import { QUERY_WIN, QUERY_LOSS, QUERY_TIES } from '../utils/queries'
import Auth from '../utils/auth'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

// class UserPage extends Component {
//   render() {

const UserPage = () => {
  const winObj = useQuery(QUERY_WIN);
  const tieObj = useQuery(QUERY_TIES);
  const { data, error, loading} = useQuery(QUERY_LOSS);

  if (loading) {
    return <h2>LOADING...</h2>
  }
  
  console.log(winObj)
  console.log(tieObj)
  console.log(data)

  const wins = winObj.data.wins.length
  const ties = tieObj.data.ties.length
  const loss = data.losses.length

  let userData = Auth.getProfile();
  let userName = userData.data.name;

  const profile = {
    color: "#00FC2A",
    fontFamily: "Good Times",
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  }
  const name = {
    color: "#00FC2A",
    fontFamily: "Good Times",
    fontSize: "25px",
  }
  const stats = {
    fontFamily: "Good Times",
    background: "white"
  }
  const challenges = {
    display: "flex",
    flexDirection: "row",
    margin: "0 auto",
    justifyContent: "center",
    alignItem: "center",


  }
  const chalbut = {
    margin: "0 auto",
    display: "block",
  }
  const color = {
      backgroundColor: "red"
  }

  const handleCreateChallenge = async event => {
    try {
      const home = window.location.origin;
      const newPage = home + "/challengecreate";
      window.location.href = newPage;

    } catch (e) {
      console.log(e);
    }
  }

    return (
      <>
      <Card>
      <Card.Img src="/img/343962@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <h1 style={profile} className="text-center text-white">Profile</h1>
     <Form className="signUp-form text-white">
      <Figure style={profile}>
        <Figure.Image
         width={171}
          height={180}
          alt="171x180"
          src="/img/profileavatar.png"
          />
      </Figure>
        <h1 style={name}className="font-weight-bold text-center text-white">{userName}
        </h1>
        <Table style={stats}striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Wins</th>
              <th>Loses</th>
              <th>Ties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{wins}</td>
              <td>{loss}</td>
              <td>{ties}</td>
            </tr>
          </tbody>
        </Table>
        <div style={challenges}>
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
            <Dropdown.Toggle style={color} variant="success" id="dropdown-basic">
              Previous Challenges
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         </div> 
        <Button style={chalbut}className="btn-lg" onClick={handleCreateChallenge}>
          Challenge Someone
         </Button>
       
      

      </Form>

      </Card.ImgOverlay>

      </Card>
      </>
    )

  }
// }

export default UserPage