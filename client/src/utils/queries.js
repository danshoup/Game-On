import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query users {
    users {
      _id
      name
      email
      zipCode
    }
  }
`;

export const QUERY_CATEGORY = gql`
  query category($_id: ID) {
      category(_id: $_id) {
        _id
        name
      }
  }
  `;

  export const QUERY_CATEGORIES = gql`
  query categories {
      categories {
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
        challengedAccept
        date
        victor
        organizerScore
        challengedScore
        category
        status
        statName
        statValue
        resultsConfirmed
    }
  }
`;

export const QUERY_LOSS = gql`
query losses {
  losses {
    _id
    name
    location
    organizer
    challenged
    challengedAccept
    date
    victor
    organizerScore
    challengedScore
    category
    status
    resultsConfirmed
  }
}
`;

export const QUERY_WIN = gql`
query wins {
  wins {
    _id
    name
    location
    organizer
    challenged
    challengedAccept
    date
    victor
    organizerScore
    challengedScore
    category
    status
    resultsConfirmed
  }
}
`;

export const QUERY_TIES = gql`
  query ties {
    ties {
      _id
      name
      location
      organizer
      challenged
      challengedAccept
      date
      victor
      organizerScore
      challengedScore
      category
      status
      resultsConfirmed
    }
  }
`;