import React, { Component, useState } from 'react';
import { useQuery} from '@apollo/client';
import { QUERY_WIN, QUERY_LOSS, QUERY_TIES, QUERY_COMPETITION } from '../utils/queries'
import Auth from '../utils/auth'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';

let compActiveList = [];
let compCompleteList = [];

// class UserPage extends Component {
//   render() {

const UserPage = () => {
  const winObj = useQuery(QUERY_WIN);
  const tieObj = useQuery(QUERY_TIES);
  const { data, error, loading} = useQuery(QUERY_LOSS);
  const allComps = useQuery(QUERY_COMPETITION);

  if (loading || winObj.loading || tieObj.loading || allComps.loading) {
    return <h2>LOADING...</h2>
  }
  
  console.log(winObj)
  console.log(tieObj)
  console.log(data)
  console.log(allComps)

  allComps.data.competition.forEach(element => {
    if (element.resultsConfirmed) {
      compCompleteList.push({ _id: element._id, name: element.name});
    } else {
      compActiveList.push({ _id: element._id, name: element.name})
    }
  });

  console.log(compActiveList);
  console.log(compCompleteList);

  const wins = winObj.data.wins.length
  const ties = tieObj.data.ties.length
  const loss = data.losses.length

  let userData = Auth.getProfile();
  let userName = userData.data.name;

  const handleCreateChallenge = async event => {
    try {
      const home = window.location.origin;
      const newPage = home + "/challengecreate";
      window.location.href = newPage;

    } catch (e) {
      console.log(e);
    }
  }
  const profile = {
    color: "#00FC2A",
    fontFamily: "good-times",
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  }
  const name = {
    color: "#00FC2A",
    fontFamily: "good-times",
    fontSize: "25px",
  }
  const stats = {
    fontFamily: "good-times",
    background: "white"
  }

  const backgroundImg = {
    margin: "0",
    padding: "0",
    minHeight: "100vh"
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

  const card = {
    marginBottom: "10px",
    width: "18rem"
  }


    return (
      <>
      <Card>
      <Card.Img style={backgroundImg} src="/img/343962@1x.png" alt="Card image" />
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
        {/* <div style={challenges}> */}
        <Card style={card} className="text-dark">
          <ListGroup  variant="flush">
            <ListGroup.Item variant="success" as="h4">Current Challenges</ListGroup.Item>
            {compActiveList.map((element) => {
              return (<ListGroup.Item 
                key={element._id} 
                action href={
                window.location.origin + "/challengepage/:" + element._id
              }>
              {element.name}</ListGroup.Item>)              
            })}

          </ListGroup>
        </Card>
        
        <Card style={card} className="text-dark">
            <ListGroup variant="flush">
              <ListGroup.Item variant="danger" as="h4">Previous Challenges</ListGroup.Item>
              {compCompleteList.map((element) => {
              return (<ListGroup.Item 
                key={element._id} 
                action href={
                window.location.origin + "/challengepage/:" + element._id
              }>
              {element.name}</ListGroup.Item>)              
            })}

            </ListGroup>
        </Card>

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