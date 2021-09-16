import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Auth from './utils/auth';

import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ChallengeCreate from './components/ChallengeCreate';
import ChallengePage from './components/ChallengePage';
import FindUser from './components/FindUser';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-secondary">

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/HomePage">GameOn</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/HomePage">Home</Nav.Link>
              <Nav.Link href="/UserPage">UserPage</Nav.Link>
              {Auth.loggedIn() ? (<Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              ) : (<Nav.Link href="/Login">Login</Nav.Link>)}
            </Nav>
          </Container>
        </Navbar>
        
        <Container fluid>
          <Row>
            <Col>
              <Switch>

                <Route exact path="/">
                  <HomePage />
                </Route>

                <Route exact path="/signup">
                  <SignUp />
                </Route>

                <Route exact path="/login">
                  <Login />
                </Route>

                <Route exact path="/userpage">

                  <UserPage />
                </Route>

                <Route exact path="/userpage/:id">

                  <UserPage />
                </Route>

                <Route exact path="/finduser">
                  <FindUser />
                </Route>

                <Route exact path="/challengecreate">
                  <ChallengeCreate />
                </Route>

                <Route exact path="/challengepage">
                  <ChallengePage />
                </Route>

                <Route exact path="/challengepage/:id">
                  <ChallengePage />
                </Route>
              
              </Switch>

            </Col>
          </Row>
        </Container>
        </div>
      </Router>
    </ApolloProvider>
  );
};


export default App;



