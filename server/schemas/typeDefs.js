const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
     _id: ID!
    name: String!
    email: String!
    skills: String!
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
      date: Date
      victor: String!
      organizerScore: Float
      challengedScore: Float
      category: String!
  }

  type Query {
    user: [User]
    category: [Category]
    competition(_id: ID): [Competition]
  }

  type Mutation {
    createCompetition(name: String!, location: String!): Competition
    createStats(_id: ID!, statValue: Float): Competition
  }
`;

module.exports = typeDefs;
