import React, { Component, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { UPDATE_COMPETITION, CONFIRM_COMPETITION } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { QUERY_COMPETITION } from '../utils/queries';
import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ChallengePage(props) {
  let me = Auth.getProfile();
  let loggedInUser = me.data.name;

  const [formState, setFormState] = useState({  victor: '', organizerScore: '', challengedScore: '', status: '', resultsConfirmed: '' });
  const [ChallengeUpdate] = useMutation( UPDATE_COMPETITION);
  const [ChallengeConfirm] = useMutation( CONFIRM_COMPETITION);

  const home = window.location.href;
  const id = home.split(":")[-1];

  const { data, error, loading } = useQuery(QUERY_COMPETITION, {variables : {_id: id}});

  if (loading) {
    return <h2>LOADING...</h2>
    }

    console.log(data.competition[0]);
    console.log(id);

  const organizer = data.competition[0].organizer;
  const challenged = data.competition[0].challenged;

  console.log(organizer);
  console.log(challenged);
  console.log(loggedInUser)

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      if (organizer === loggedInUser) {
        const mutationResponse = await ChallengeUpdate({
          variables: { _id: id, victor: formState.victor, organizerScore: formState.organizerScore, challengedScore: formState.challengedScore, status: formState.status },
        });
        console.log(mutationResponse);
      } else if (challenged === loggedInUser) {
        const mutationResponse = await ChallengeConfirm({
          variables: {_id: id, resultsConfirmed: (formState.resultsConfirmed === "on" ? true : false)  }
        })
        console.log(mutationResponse);
      }
      

    } catch (e) {
      console.log(e);
    }
  };
  const gametype = {
    fontFamily: "Good Times",
    fontSize: "70px",
    color: "#00FC2A"
  }

  const challenger = {
    fontFamily: "Good Times",
    fontSize: "50px",
  }

  const otherperson = {
    fontFamily: "Good Times",
    fontSize: "50px",
    marginBottom: "40px"
  }

  const text = {
    fontFamily: "Good Times",
    marginBottom: "20px"
  }

  const vs = {
    fontFamily: "Good Times",
    color: "#00FC2A"

  }

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
   if (loggedInUser === challenged) {   
    return (
      <Card>
      <Card.Img src="/img/697142-1@1x.png" alt="Card image" />
        <Card.ImgOverlay>
          
      <h1 style={gametype} className="text-center">{data.competition[0].category}</h1>
      
     <Form onSubmit={handleFormSubmit} className="signUp-form text-white">
     <h1 style={challenger} className="font-weight-bold text-center text-white">{organizer}
        </h1>
        <h1 style={vs} className="font-weight-bold text-center"> vs. 
        </h1>
        <h1 style={otherperson} className="font-weight-bold text-center text-white">{challenged}
        </h1>
         
        <Card style={{ width: '18rem' }} className="text-dark">
            <ListGroup variant="flush">
            <ListGroup.Item variant="success" as="h4">Results from Organizer</ListGroup.Item>
            <ListGroup.Item>Victor:  {data.competition[0].victor}</ListGroup.Item>
            <ListGroup.Item>{organizer} score: {data.competition[0].organizerScore}</ListGroup.Item>
            <ListGroup.Item>{challenged} score: {data.competition[0].challengedScore}</ListGroup.Item>
            </ListGroup>
        </Card>
        
        <Form.Group className="mb-3"  controlId="formBasicCheckbox">
        <Form.Check
        style={text}
        type="checkbox" 
        name="resultsConfirmed" 
        id="resultsConfirmed"
        label="Results Confirmed"
        onChange={handleChange} />
      </Form.Group>
      <Button type="submit" className="btn-lg">
          Submit Results
         </Button>
      </Form>
     </Card.ImgOverlay>
      </Card>
     )
    } else {
      return (
        <Card>
      <Card.Img src="/img/697142-1@1x.png" alt="Card image" />
        <Card.ImgOverlay>
          
      <h1 style={gametype} className="text-center">{data.competition[0].category}</h1>
        <Form onSubmit={handleFormSubmit} className="signUp-form text-white">
        <h1 style={challenger} className="font-weight-bold text-center text-white">{organizer}
        </h1>
        <h1 style={vs} className="font-weight-bold text-center"> vs. 
        </h1>
        <h1 style={otherperson} className="font-weight-bold text-center text-white">{challenged}
        </h1>
        <Form.Group>
        <Form.Select 
            aria-label="Victor" 
            id="victor"
            name="victor"
            onChange={(selected) => {
              const victor = selected.target.value;
              setFormState({
                ...formState,
                victor: victor,
              });
            }}>
          <option>Select A Victor</option>
          <option key={organizer} value={organizer}>{organizer}</option>
          <option key={challenged} value={challenged}>{challenged}</option>
          <option key="draw" value="draw">Tie</option>
          </Form.Select>
          </Form.Group>
        <Form.Group>
          <Form.Label style={text}>Score</Form.Label>
          <Form.Control 
          name="organizerScore"
          type="text"
          placeholder="Organizer Score"
          id="organizerScore"
          onChange={handleChange} />
          <Form.Control 
          name="challengedScore"
          type="text" 
          placeholder="Challenged Score"
          id="challengedScore"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3"  controlId="formBasicCheckbox">
        <Form.Check 
        disabled
        style={text}
        type="checkbox" 
        name="resultsConfirmed" 
        id="resultsConfirmed"
        label="Results Confirmed"
        onChange={handleChange} />
      </Form.Group>
      
      
        <Button type="submit" className="btn-lg">
          Submit Results
         </Button>
       
      

      </Form>

      </Card.ImgOverlay>

      </Card>
    ) 
  }
}


export default ChallengePage;

