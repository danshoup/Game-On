import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ChallengeCreate from './components/ChallengeCreate';
import ChallengePage from './components/ChallengePage';
import FindUser from './components/FindUser';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
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

            <Route exact path="/userpage/:id">
              <UserPage />
            </Route>

            <Route exact path="/finduser">
              <FindUser />
            </Route>

            <Route exact path="/challengecreate">
              <ChallengeCreate />
            </Route>

            <Route exact path="/challengepage/:id">
              <ChallengePage />
            </Route>


          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};


export default App;



