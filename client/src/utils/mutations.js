import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login(
    $email: String!, 
    $password: String!) {
    login(
      email: $email, 
      password: $password) {
        token
        user {
          _id
          username
      }
    }
  }
`;

// firstName - lastName?
export const ADD_USER = gql`
  mutation addUser(
    $_id: String!, 
    $name: String!, 
    $email: String!,
    $password: String!, 
    $zipCode: String!) {
    createUser(
      _id: $id, 
      name: $name, 
      email: $email,
      password: $password,
      zipCode: $zipCode) {
        _id
        name
        email
        password
        zipCode
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation createCategory(
    $_id: String!, 
    $name: String!) {
    createCategory(
      _id: $_id, 
      name: $name) {
        _id
        name
    }
  }
`;

export const CREATE_COMPETITION = gql`
  mutation createCompetition(
    $_id: String!, 
    $name: String!, 
    $location: String!, 
    $organizer: String!, 
    $challenged: String!,
    $date: Date!,
    $category: String!) {
    createCompetition(
      _id: $_id, 
      name: $name, 
      location: $location, 
      organizer: $organizer, 
      challenged: $challenged, 
      date: $date,
      category: $category) {
        _id
        name
        location
        category
        organizer
        challenged
        challengedAccepted
        date
    }
  }
`;

export const UPDATE_COMPETITION = gql`
  mutation udpateCompetition(
    $_id: String!, 
    $victor: String!, 
    $organizerScore: String!, 
    $challengedScore: String!, 
    $status: String!) {
    updateCompetition(
      _id: $_id, 
      victor: $victor, 
      organizerScore: $organizerScore, 
      challengedScore: $challengedScore, 
      status: $status) {
        _id
        victor
        organizerScore
        challengedScore
        status
    }
  }
`;

export const CONFIRM_COMPETITION = gql`
  mutation confirmCompetition(
    $_id: String!, 
    $resultsConfirmed: Boolean!) {
    confirmCompetition(
      _id: $_id, 
      resultsConfirmed: $resultsConfirmed) {
        _id
        resultsConfirmed
    }
  }
`;

export const CREATE_STATS = gql`
  mutation createStats(
    $_id: String!, 
    $statValue: String!) {
      createStats(
        _id: $_id,  
        statValue: $statValue) {
          _id
          statValue
    }
  }
`;