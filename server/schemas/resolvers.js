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
        user: async (parent, {username}) => {
          const params = username ? { username } : {};
          return User.find(params);
        }
    },
    Mutation: {
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
      },
      addUser: async (parent, { name, email, password, zipCode }) => {
        const user = await User.create({ name, email, password, zipCode });
        const token = signToken(user);
        return { token, user };
      },
      createCompetition: async (parent, args) => {
        const competition = await Competition.create(args);
        return competition;
      },
      updateCompetition: async (parent, args) => {
        const updatedCompetition = await Competition.findOneAndUpdate(
        args._id,
        { ...args},
        { new: true });
        return updatedCompetition;
      },
      confirmCompetition: async (parent, args) => {
        const confirmedCompetition = await Competition.findOneAndUpdate(
          args._id,
          {...args},
          { new: true });
        return confirmedCompetition;
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
