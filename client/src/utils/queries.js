import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      name
      zipCode
    }
  }
`;

export const QUERY_CATEGORY = gql`
  query categories($_id: String) {
      categories(_id: $_id) {
        _id
        name
      }
  }
  `;

export const QUERY_COMPETITION = gql`
  query competitions($_id: String) {
    competitions(_id: $_id) {
        _id
        name
        location
        category
        organizer
        challenged
        date
        victor
        organizerScore
        challengedScore
        category
        status
        statName
        statValue
    }
  }
`;