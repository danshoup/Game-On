import React, { Component, useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useQuery, useMutation } from '@apollo/client';
// import "./LoginWeb.css";
import { CREATE_COMPETITION } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { QUERY_CATEGORY } from '../utils/queries';
import { QUERY_USER } from '../utils/queries';

function ChallengeCreate(props) {
  const [formState, setFormState] = useState({ name: '', location: '', organizer: '', challenged: '', date: '', category: ''});
  const [ChallengeCreate, { error }] = useMutation( CREATE_COMPETITION);
  let categoryList=[];
  let userList = [];

  // Get the list of categories
  const { data, cError, loading } = useQuery(QUERY_CATEGORY);
  
  if (loading) {
    return <h2>LOADING...</h2>
  }
  
  data.category.forEach(element => {
    categoryList.push(element.name)
  });

  // Get the list of users
  useEffect(() => {
    if(!loading) {
      const { userdata, uError, userloading } = useQuery(QUERY_USER);
      
      if (userloading) {
        return <h2>LOADING...</h2>
      }
      
      userdata.user.forEach(element => {
        userList.push(element.name)
      });      
    }
  })

  
  // Handle the data upon clicking the submit button
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

  // Updatet he form state as data is updated in the form.
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

      <h1 className="text-center text-white">Challenge An Opponent</h1>
     <Form onSubmit={handleFormSubmit} className="signUp-form text-white">
        <h1 className="font-weight-bold text-center text-white">Matchup
        </h1>
        <h6 className="font-weight-bold text-center text-white">
          "organizer" VS. "challenged"
        </h6>
        <Form.Group>
          <Form.Label>Competition Category</Form.Label>
          <Form.Select 
            aria-label="Select challenge category" 
            controlId="category"
            name="category">
          <option>Select a category</option>
          {categoryList.map((category) => 
            <option key={category} value={category}>{category}</option>
          )}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Competion Name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="The Thrilla in Manilla"
          controlId="name"
          name="name"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Location"
          controlId="location"
          name="location"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Event Date: MM/DD/YYYY"
          controlId="date"
          name="date"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group>
        <Form.Label>Person to challenge</Form.Label>
        {/* <Form.Control */}
        <Typeahead
          type="text"
          name="cahllenged"
          controlId="challenged"
          placeholder="Start typing a user name"
          onChange={handleChange}
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

