const { User, Category, Competition } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

// Need to incorporate User model within query
const resolvers = {
    Query: {
        category: async () => {
          return Category.find({});
        },
        competition: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Competition.find(params);
      },
    },
    Mutation: {
      addUser: async (parent, { name, email, password, zipCode }) => {
        const user = await User.create({ name, email, password, zipCode });
        const token = signToken(user);
        return { token, user };
      },
      createCompetition: async (parent, args) => {
        const competition = await Competition.create(args);
        return competition;
      },
      createStats: async (parent, { _id, statValueNum }) => {
        const score = await Competition.findOneAndUpdate(
          { _id },
          { $inc: { [`user${statValueNum}_score`]: 1 } },
          { new: true }
        );
        return score;
      },
    },
  
};

module.exports = resolvers;
