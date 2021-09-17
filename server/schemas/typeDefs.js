const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
     _id: ID!
    name: String!
    email: String!
    zipCode: String!
  }

  type Category {
      _id: ID!
      name: String!
  }

  type Competition {
      _id: ID!
      name: String!
      location: String!
      organizer: String!
      challenged: String!
      challengedAccept: Boolean
      date: String!
      victor: String
      organizerScore: String
      challengedScore: String
      category: String!
      status: String!
      resultsConfirmed: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]
    category: [Category]
    competition(_id: ID): [Competition]
    wins: [Competition]
    losses: [Competition]
    ties: [Competition]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!, zipCode: String!): Auth
    createCompetition(name: String!, location: String!, organizer: String!, challenged: String!, date: String!, category: String!): Competition
    updateCompetition(_id: ID!, victor: String!, organizerScore: String!, challengedScore: String!, status: String!): Competition
    confirmCompetition(_id: ID!, resultsConfirmed: Boolean!): Competition
    createStats(_id: ID!, statValue: String!): Competition
  }
`;

module.exports = typeDefs;
