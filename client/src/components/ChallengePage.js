import React, { Component, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { UPDATE_COMPETITION, CONFIRM_COMPETITION } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown'

function ChallengePage(props) {
  const [formState, setFormState] = useState({ victor: '', organizerScore: '', challengedScore: '', status: '', resultsConfirmed: '' });
  const [ChallengePage, { error }] = useMutation( UPDATE_COMPETITION, CONFIRM_COMPETITION);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await ChallengePage({
        variables: { victor: formState.victor, organizerScore: formState.organizerScore, challengedScore: formState.challengedScore, status: formState.status, resultsConfirmed: formState.resultsConfirmed },
      });
      const token = mutationResponse.data.ChallengePage.token;
      Auth.ChallengePage(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = event => {
    const { victor, value } = event.target;
    setFormState({
      ...formState,
      [victor]: value,
    });
  };

    return (
      <Card>
      <Card.Img src="/img/697142-1@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <h1 className="text-center text-white">"category"</h1>
     <Form onSubmit={handleFormSubmit} className="signUp-form text-white">
        <h1 className="font-weight-bold text-center text-white">"organizerScore" vs. "challengedScore"
        </h1>
      
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Who won?
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">"Organizer"</Dropdown.Item>
            <Dropdown.Item href="#/action-2">"Challenged"</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Tie</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Group>
          <Form.Label>Score</Form.Label>
          <Form.Control 
          type="name" 
          placeholder="Was there a score?"
          id="email"
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

