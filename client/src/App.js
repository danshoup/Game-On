import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, useQuery } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
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

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-dark">

        <Navbar bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand href="/HomePage">GameOn</Navbar.Brand> */}
            <Navbar.Brand href="/">
              <img
                src="/img/GameOnLogo.svg"
                width="300"
                height="100"
                className="d-inline-block align-top"
                alt="GameOn logo"
              />
            </Navbar.Brand>
            <Nav className="justify-content-end">
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

                <Route exact path="/" component={HomePage}>

                </Route>

                <Route exact path="/signup" component={SignUp}>

                </Route>
                   
                <Route exact path="/HomePage">
                   <HomePage />
                </Route>

                <Route exact path="/login">
                  <Login />
                </Route>

                <Route exact path="/userpage" component={UserPage}>
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



