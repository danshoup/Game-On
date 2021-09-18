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
          name
      }
    }
  }
`;

// firstName - lastName?
export const ADD_USER = gql`
  mutation addUser( 
    $name: String!, 
    $email: String!,
    $password: String!, 
    $zipCode: String!) {
    addUser( 
      name: $name, 
      email: $email,
      password: $password,
      zipCode: $zipCode) {
        token
        user {
        _id
        name
        email
        zipCode
      }
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation createCategory(
    $_id: ID!, 
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
    $name: String!, 
    $location: String!, 
    $organizer: String!, 
    $challenged: String!,
    $date: String!,
    $category: String!) {
    createCompetition(
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
        challengedAccept
        date
    }
  }
`;

export const UPDATE_COMPETITION = gql`
  mutation udpateCompetition(
    $_id: ID!, 
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
    $_id: ID!, 
    $resultsConfirmed: Boolean!) {
    confirmCompetition(
      _id: $_id, 
      resultsConfirmed: $resultsConfirmed) {
        _id
        resultsConfirmed
    }
  }
`;
