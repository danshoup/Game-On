import React, { Component, useState } from 'react';
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
  let me = Auth.getProfile();
  let organizer = me.data.name;

  const [formState, setFormState] = useState({ name: '', location: '', organizer: organizer, challenged: '', date: '', category: ''});
  const [ChallengeCreate, { error }] = useMutation( CREATE_COMPETITION);
  let categoryList=[];
  let userList = [];

  // Get the list of categories
  const { data, cError, loading } = useQuery(QUERY_CATEGORY);
    // Get the list of users
  const userData = useQuery(QUERY_USER);

  if (loading || userData.loading) {
    return <h2>LOADING...</h2>
  }

  data.category.forEach(element => {
    categoryList.push(element.name)
  });
  userData.data.user.forEach(element => {
    userList.push(element.name)
  });

  // Handle the data upon clicking the submit button
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {

      const mutationResponse = await ChallengeCreate({
        variables: { name: formState.name, location: formState.location, organizer: formState.organizer, challenged: formState.challenged, date: formState.date, category: formState.category},
      });

      const token = mutationResponse.data.createCompetition.token;
      console.log(mutationResponse);

      let id = mutationResponse.data.createCompetition._id;

      const home = window.location.origin;
      const newPage = home + "/challengepage/:" + id;
      window.location.href = newPage;

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

  const backgroundImg = {
    margin: "0",
    padding: "0",
    minHeight: "100vh"
  }

  const logo = {
    height: "20rem",
  }
  
  const matchup = {
    fontFamily: "Good Times",
    color: "#00FC2A" 
  }

  const challengers = {
    fontFamily: "Good Times",
    color: "#00FC2A",
    fontWeight: "900"
  }

  const padding  = {
    marginBottom: "10px"
  }
    return (
      
      <Card>
      <Card.Img style={backgroundImg} src="/img/343962@1x.png" alt="Card image" />
        <Card.ImgOverlay>

      <Card.Img style={logo} variant="top" src="/img/GameOnLogo.svg" />
     <Form onSubmit={handleFormSubmit} className="signUp-form text-white">
        <h1 style={matchup} className="font-weight-bold text-center">Matchup
        </h1>
        <h6 style={challengers} className="font-weight-bold text-center">
          "organizer" VS. "challenged"
        </h6>
        <Form.Group>
          <Form.Label>Competition Category</Form.Label>
          <Form.Select
            style={padding} 
            aria-label="Select challenge category" 
            id="category"
            name="category"
            onChange={(selected) => {
              const category = selected.target.value;
              setFormState({
                ...formState,
                category: category,
              });
            }}>
          <option>Select a category</option>
          {categoryList.map((category) => 
            <option key={category} value={category}>{category}</option>
          )}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Competion Name</Form.Label>
          <Form.Control
          style={padding} 
          type="text" 
          placeholder="The Thrilla in Manilla"
          id="name"
          name="name"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
          style={padding} 
          type="text" 
          placeholder="Location"
          id="location"
          name="location"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control
          style={padding} 
          type="text" 
          placeholder="Event Date: MM/DD/YYYY"
          id="date"
          name="date"
          onChange={handleChange} />
        </Form.Group>
        <Form.Group>
        <Form.Label>Person to challenge</Form.Label>
        {/* <Form.Control */}
        <Typeahead
          style={padding}
          type="text"
          id="challenged"
          name="challenged"

          placeholder="Start typing a user name"
          onChange={(selected) => {
            let challengedName = selected.toString()
            setFormState({
              ...formState,
              challenged: challengedName,
            });
          }}
          options={userList}
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

