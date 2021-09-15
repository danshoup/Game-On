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

export const ADD_USER = gql`
  mutation addUser(
    $_id: String!, 
    $name: String!, 
    $email: String!, 
    $zipCode: String!) {
    createUser(
      _id: $id, 
      name: $name, 
      email: $email,
      zipCode: $zipCode) {
        _id
        name
        email
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
    $category: String! 
    $organizer: String!, 
    $challenged: String!, 
    $challengedAccepted: Boolean!, 
    $date: Date!) {
    createCompetition(
      _id: $_id, 
      name: $name, 
      location: $location, 
      category: $category, 
      organizer: $organizer, 
      challenged: $challenged, 
      challengedAccepted: $challengedAccepted, date: $date) {
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
    $resultsConfirmed: Boolean!, 
    $status: String!) {
    updateCompetition(
      _id: $_id, 
      victor: $victor, 
      organizerScore: $organizerScore, 
      challengedScore: $challengedScore, 
      resultsConfirmed: $resultsConfirmed, 
      status: $status) {
        _id
        victor
        organizerScore
        challengedScore
        resultsConfirmed
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
    $statName: String!, 
    $statValue: String!) {
      createStats(
        _id: $_id, 
        statName: $statName, 
        statValue: $statValue) {
          _id
          statName
          statValue
    }
  }
`;