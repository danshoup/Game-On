import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Auth from '../utils/auth'




class HomePage extends Component {
  render() {
    return (
      <>
       
      
      <Card>
        <Card.Img src="/img/862202--1-@1x.png" alt="Carad image" />
        <Card.ImgOverlay>
        <h1 className="text-center text-white">Welcome To Game On; This is the Main Info Page</h1>
        <Card.Img variant="top" src="/img/GameOnLogo.svg" />
        <Card.Body className="text-white">
          <Card.Title>The Spit-and-a-Handshake App</Card.Title>
            <Card.Text>
             Do you want to challenge someone to a duel? (Well, maybe not a REAL duel...)

             How about a friendly game of "H-O-R-S-E"? A quick tennis match? A round of 8-Ball? 

             Game-On can help you organize, and keep track of, your bets and challenges with friends. 

             Just signup, or login, create a challenge, and find a friend to prove you're competitive prowess.
            </Card.Text>
        </Card.Body>
        {Auth.loggedIn() ? ("") : (
        <>
        <Button variant="primary" type="submit">
            Login
          </Button>

        <Card.Body>
          <Card.Link className="text-center" href="/SignUp">Don't have an account? Click here!</Card.Link>
        </Card.Body>
        </>
        )}
        </Card.ImgOverlay>
      </Card>
      
      </>
    )
  }
}

export default HomePage

