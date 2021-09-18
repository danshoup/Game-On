import React, { Component, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { UPDATE_COMPETITION, CONFIRM_COMPETITION } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { QUERY_COMPETITION } from '../utils/queries';

function ChallengePage(props) {
  let me = Auth.getProfile();
  let organizerName = me.data.name;

  const [formState, setFormState] = useState({  victor: '', organizerScore: '', challengedScore: '', status: '', resultsConfirmed: '' });
  const [ChallengeUpdate] = useMutation( UPDATE_COMPETITION);
  const [ChallengeConfirm] = useMutation( CONFIRM_COMPETITION);

  const home = window.location.href;
  const id = home.split(":")[3];

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

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await ChallengeUpdate({
        variables: { _id: id, victor: formState.victor, organizerScore: formState.organizerScore, challengedScore: formState.challengedScore, status: formState.status, resultsConfirmed: formState.resultsConfirmed },
      });
     
      console.log(mutationResponse);

    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return (
      <Card>
      <Card.Img src="/img/697142-1@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <h1 className="text-center text-white">{data.competition[0].category}</h1>
     <Form onSubmit={handleFormSubmit} className="signUp-form text-white">
        <h1 className="font-weight-bold text-center text-white">{organizer} vs. {challenged}
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
          <Form.Label>Score</Form.Label>
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
    );
  }

export default ChallengePage;

