import React, { Component, useState } from 'react';
import { useMutation } from '@apollo/client';
// import "./LoginWeb.css";
import { CREATE_COMPETITION } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function ChallengeCreate(props) {
  const [formState, setFormState] = useState({ name: '', location: '', organizer: '', challenged: '', date: '', category: ''});
  const [ChallengeCreate, { error }] = useMutation( CREATE_COMPETITION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await ChallengeCreate({
        variables: { name: formState.name, location: formState.location, organizer: formState.organizer, challenged: formState.challenged, date: formState.date, category: formState.category},
      });
      const token = mutationResponse.data.createCompetition.token;
      Auth.ChallengeCreate(token);
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
      <Card.Img src="/img/862202--1-@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <Card.Img variant="top" src="/img/GameOnLogo.svg" />
     <Form onSubmit={handleFormSubmit} className="signUp-form text-white">
        <h1 className="font-weight-bold text-center text-white">Matchup
        </h1>
        <h6 className="font-weight-bold text-center text-white">
          "organizer" VS. "challenged"
        </h6>
        <Form.Group>
          <Form.Label>Competition Category</Form.Label>
          <Form.Control 
          type="name" 
          placeholder="Competition Category"
          category="category"
          id="email"
          onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Category Type</Form.Label>
          <Form.Control 
          type="name" 
          placeholder="Pool"
          id="email"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Location"
          id="email"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Event Date"
          id="email"
          onChange={handleChange} />
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
        <Button type="submit" className="btn-lg">
          Create Matchup
         </Button>
       </Form>
    </Card.ImgOverlay>
  </Card>
    );
  }

export default ChallengeCreate;

